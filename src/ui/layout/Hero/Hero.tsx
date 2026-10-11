import type { PropsWithChildren } from 'hono/jsx'

interface HeroProps extends PropsWithChildren {
    image?: string
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    body?: string
    className?: string
}

export const Hero = ({
    image,
    title = 'Hello there',
    subtitle,
    ctaText = 'Get Started',
    ctaLink,
    body = 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    className = '',
    children,
}: HeroProps) => {
    return (
        <div
            className={`hero min-h-screen ${className}`.trim()}
            style={{
                backgroundImage: image ? `url(${image})` : "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    {children ?? (
                        <>
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            {subtitle && <p className="mb-3 text-lg">{subtitle}</p>}
                            <p className="mb-5">{body}</p>
                            {ctaLink ? (
                                <a className="btn btn-primary" href={ctaLink}>{ctaText}</a>
                            ) : (
                                <button className="btn btn-primary" type="button">{ctaText}</button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
