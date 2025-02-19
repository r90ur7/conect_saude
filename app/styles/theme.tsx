import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                brand: {
                    primary: { value: "#1D8B89" },
                    secondary: { value: "#C5E86C" },
                    tertiary: { value: "#20909E" },
                    accent: { value: "#66D7E5" }, 
                    light: { value: "#F5FFFE" },
                    dark: { value: "#156665" }, 
                    subdark: { value: "#0D4D4A" },
                },
                light: {
                    basic: { value: "#FFFFFF" },
                    pearl: { value: "#F8F9FA" },
                    snow: { value: "#F5F6F8" },
                    ivory: { value: "#F2F3F5" },
                    seashell: { value: "#EFF0F2" },
                    ghost: { value: "#E8E9EC" },
                    antiFlash: { value: "#E2E3E5" },
                },
                gray: {
                    50: { value: "#F7FAFA" },
                    100: { value: "#E7F0F0" },
                    200: { value: "#D7E5E5" },
                    300: { value: "#B5CCCC" },
                    400: { value: "#92B0B0" },
                    500: { value: "#708888" },
                    600: { value: "#5A6F6F" },
                    700: { value: "#455656" },
                    800: { value: "#2F3C3C" },
                    900: { value: "#1A2222" },
                },
            },
            fonts: {
                heading: { value: `'Geist Mono', sans-serif` },
                body: { value: `'Geist Mono', sans-serif` },
            },
            shadows: {
                card: { value: "0 4px 6px rgba(29, 139, 137, 0.1)" },
            },
        },
    },
})