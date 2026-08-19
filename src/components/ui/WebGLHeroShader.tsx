'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function WebGLHeroShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Accessibility check: disable if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl', { powerPreference: 'low-power', alpha: true }) || 
           (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    } catch {
      setWebglSupported(false);
      return;
    }

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    let animationFrameId: number;
    let isMounted = true;

    function syncSize() {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor((canvas.clientWidth || 1280) * dpr);
      const h = Math.floor((canvas.clientHeight || 720) * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      syncSize();
    });
    resizeObserver.observe(canvas);
    syncSize();

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 st = uv * aspect;
        
        // Circuit board motif with slow subtle flow
        float line_width = 0.0035;
        float grid_size = 0.08;
        
        vec2 grid = fract(st / grid_size);
        float lines = step(grid.x, line_width) + step(grid.y, line_width);
        
        // Pulsing nodes at intersections
        vec2 node_pos = floor(st / grid_size) * grid_size + grid_size * 0.5;
        float dist = length(st - node_pos);
        
        // Mouse reactivity
        vec2 mouse_st = (u_mouse / u_resolution) * aspect;
        float mouse_dist = length(st - mouse_st);
        float mouse_glow = smoothstep(0.35, 0.0, mouse_dist) * 0.15;
        
        float node = smoothstep(0.006, 0.002, dist) * (0.4 + 0.6 * sin(u_time * 1.5 + node_pos.x * 12.0 + node_pos.y * 8.0));
        
        // Palette: Parchment #F3ECE0 to Maroon #5C1A28
        vec3 beige = vec3(0.953, 0.925, 0.878);
        vec3 maroon = vec3(0.36, 0.102, 0.157);
        
        float intensity = (lines * 0.035 + node * 0.09 + mouse_glow);
        vec3 color = mix(beige, maroon, clamp(intensity, 0.0, 1.0));
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        mouse.x = (e.clientX - rect.left) * dpr;
        mouse.y = (rect.height - (e.clientY - rect.top)) * dpr;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function render(now: number) {
      if (!isMounted || !gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);

      if (uTime) gl.uniform1f(uTime, now * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isMounted = false;
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (gl && buffer && program) {
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      }
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 pointer-events-none opacity-30 blueprint-bg -z-10" />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply overflow-hidden -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
