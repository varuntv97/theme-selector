import React from 'react'
import ThemeSelector from "../components/ThemeSelector"

type Props = {}

function HeroSection({ }: Props) {

    return (
        <section id="hero" className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4 w-3/4">
                <ThemeSelector />
            </div>
        </section>
    )
}

export default HeroSection