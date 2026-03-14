import { motion } from 'motion/react';
import { useEffect, useState, type FC } from 'react';

const CONFETTI_COLORS = ['#38bdf8', '#f472b6', '#facc15', '#4ade80', '#a78bfa', '#fb923c', '#34d399'];
const CONFETTI_COUNT = 40;

interface ConfettiPiece {
    id: number;
    left: number;
    delay: number;
    duration: number;
    color: string;
    size: number;
    shape: 'circle' | 'rect';
}

export const Confetti: FC = () => {
    const [pieces, setPieces] = useState<ConfettiPiece[]>(() =>
        Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 1.5,
            duration: 2.5 + Math.random() * 2,
            color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            size: 6 + Math.random() * 6,
            shape: Math.random() > 0.5 ? 'circle' : 'rect',
        })),
    );

    useEffect(() => {
        if (pieces.length === 0) return;
        const maxDuration = Math.max(...pieces.map((p) => p.delay + p.duration));
        const timeout = setTimeout(() => {
            setPieces([]);
        }, maxDuration * 1000);
        return () => clearTimeout(timeout);
    }, [pieces, setPieces]);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
            {pieces.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: -10 }}
                    animate={{
                        y: window.innerHeight + 40,
                        rotate: 720,
                        scale: 0.4,
                        opacity: [1, 1, 1, 1, 0],
                        x: [0, 15, 0, -15, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: 'easeIn',
                    }}
                    style={{
                        position: 'absolute',
                        left: `${p.left}%`,
                        top: '-20px',
                        width: p.size,
                        height: p.shape === 'rect' ? p.size * 1.4 : p.size,
                        backgroundColor: p.color,
                        borderRadius: p.shape === 'circle' ? '50%' : '2px',
                    }}
                />
            ))}
        </div>
    );
};
