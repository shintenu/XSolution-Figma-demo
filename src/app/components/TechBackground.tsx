import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  type: 'service' | 'container' | 'data';
}

interface DataFlow {
  startNode: Node;
  endNode: Node;
  progress: number;
  speed: number;
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create nodes (representing microservices, containers, distributed nodes)
    const nodeCount = 40;
    const nodes: Node[] = [];
    const types: Node['type'][] = ['service', 'container', 'data'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
        opacity: Math.random() * 0.4 + 0.3,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    // Create data flows
    const dataFlows: DataFlow[] = [];
    const createDataFlows = () => {
      dataFlows.length = 0;
      for (let i = 0; i < 15; i++) {
        const startNode = nodes[Math.floor(Math.random() * nodes.length)];
        const endNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (startNode !== endNode) {
          dataFlows.push({
            startNode,
            endNode,
            progress: Math.random(),
            speed: Math.random() * 0.005 + 0.002,
          });
        }
      }
    };
    createDataFlows();

    // Hexagon drawing function (representing containers)
    const drawHexagon = (x: number, y: number, radius: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = radius * Math.cos(angle);
        const hy = radius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      ctx.restore();
    };

    let animationFrameId: number;
    let frame = 0;

    const animate = () => {
      frame++;
      
      // Clear with fade effect
      ctx.fillStyle = 'rgba(10, 22, 40, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw based on type
        if (node.type === 'service') {
          // Circle for services
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
          gradient.addColorStop(0, `rgba(0, 188, 212, ${node.opacity})`);
          gradient.addColorStop(1, 'rgba(0, 188, 212, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 255, ${node.opacity + 0.3})`;
          ctx.fill();
        } else if (node.type === 'container') {
          // Hexagon for containers
          drawHexagon(node.x, node.y, node.radius * 1.5, frame * 0.001);
          ctx.strokeStyle = `rgba(14, 165, 233, ${node.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          // Square for data nodes
          ctx.save();
          ctx.translate(node.x, node.y);
          ctx.rotate(frame * 0.002);
          ctx.strokeStyle = `rgba(34, 211, 238, ${node.opacity})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(-node.radius, -node.radius, node.radius * 2, node.radius * 2);
          ctx.restore();
        }
      });

      // Draw connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = 0.1 * (1 - distance / 200);
            ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw data flows
      dataFlows.forEach((flow) => {
        flow.progress += flow.speed;
        if (flow.progress > 1) {
          flow.progress = 0;
          // Randomly reassign nodes
          if (Math.random() > 0.7) {
            flow.startNode = nodes[Math.floor(Math.random() * nodes.length)];
            flow.endNode = nodes[Math.floor(Math.random() * nodes.length)];
          }
        }

        const x = flow.startNode.x + (flow.endNode.x - flow.startNode.x) * flow.progress;
        const y = flow.startNode.y + (flow.endNode.y - flow.startNode.y) * flow.progress;

        // Draw data packet
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.8 - flow.progress * 0.5})`;
        ctx.fill();

        // Draw trail
        const trailLength = 20;
        for (let i = 0; i < trailLength; i++) {
          const trailProgress = flow.progress - (i / trailLength) * 0.1;
          if (trailProgress > 0) {
            const tx = flow.startNode.x + (flow.endNode.x - flow.startNode.x) * trailProgress;
            const ty = flow.startNode.y + (flow.endNode.y - flow.startNode.y) * trailProgress;
            ctx.beginPath();
            ctx.arc(tx, ty, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34, 211, 238, ${(0.4 - flow.progress * 0.3) * (1 - i / trailLength)})`;
            ctx.fill();
          }
        }
      });

      // Draw cluster indicators (representing distributed systems)
      const clusterCount = 3;
      for (let i = 0; i < clusterCount; i++) {
        const angle = (frame * 0.0005 + (i * Math.PI * 2) / clusterCount);
        const radius = 150;
        const cx = canvas.width / 2 + Math.cos(angle) * radius;
        const cy = canvas.height / 2 + Math.sin(angle) * radius;

        // Outer ring
        ctx.beginPath();
        ctx.arc(cx, cy, 40 + Math.sin(frame * 0.01 + i) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 188, 212, ${0.1 + Math.sin(frame * 0.01 + i) * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(cx, cy, 25, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, 0.15)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1b2e 50%, #1a2332 100%)' }}
    />
  );
}
