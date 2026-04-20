import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
}

function MatrixRain({ className }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - mix of numbers, letters, and symbols
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    // Colors with neon theme
    const colors = ['#00f6ff', '#6d4cff', '#ff36f7', '#00ff88'];

    let animationId: number;

    const draw = () => {
      // Semi-transparent black overlay for trail effect
      ctx.fillStyle = 'rgba(5, 3, 10, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

        // Random color from neon palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        // Add glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset shadow for next character
        ctx.shadowBlur = 0;

        // Reset drop to top randomly or when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.3,
      }}
      aria-hidden="true"
    />
  );
}

export default MatrixRain;