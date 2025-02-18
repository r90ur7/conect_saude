/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect } from "react"
import {
    Box,
    Container,
    IconButton,
} from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Slider from "react-slick"
import ProfessionalCard from "./professional-card"
import { professionals } from "@/lib/data"
import { CategoryEnum } from "@/lib/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface ProfessionalGridDynamicProps {
    selectedCategory: CategoryEnum
}

export default function ProfessionalGridDynamic({ selectedCategory }: ProfessionalGridDynamicProps) {
    // Filtrar profissionais pela categoria selecionada
    const filteredProfessionals = selectedCategory === CategoryEnum.TODAS
        ? professionals
        : professionals.filter(prof => prof.category === selectedCategory)

    // Componentes de navegação customizados
    const PrevArrow = (props: any) => {
        const { onClick } = props
        return (
            <IconButton
                aria-label="Previous"
                position="absolute"
                left={{ base: "-20px", md: "-40px" }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={onClick}
                variant="ghost"
                color="brand.primary"
                _hover={{ bg: "brand.light" }}
                size={{ base: "md", md: "lg" }}
            >
                <ChevronLeftIcon />
            </IconButton>
        )
    }

    const NextArrow = (props: any) => {
        const { onClick } = props
        return (
            <IconButton
                aria-label="Next"
                position="absolute"
                right={{ base: "-20px", md: "-40px" }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={onClick}
                variant="ghost"
                color="brand.primary"
                _hover={{ bg: "brand.light" }}
                size={{ base: "md", md: "lg" }}
            >
                <ChevronRightIcon />
            </IconButton    >
        )
    }

    // Configurações do Slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        customPaging: () => (
            <Box
                as="button"
                w="8px"
                h="8px"
                borderRadius="full"
                bg="gray.300"
                _active={{ bg: "brand.primary" }}
                mx={1}
            />
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
            .slick-slider {
                display: flex;
                flex-direction: column;
            }
            .slick-list {
                order: 1;
            }
            .slick-dots {
                order: 2;
                position: relative;
                bottom: 0;
                margin-top: 20px;
                display: flex !important;
                justify-content: center;
                align-items: center;
                gap: 8px;
            }
            .slick-dots li {
                margin: 0;
            }
            .slick-dots li button:before {
                display: none;
            }
            .slick-dots li button {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: white;
                border: 1px solid var(--chakra-colors-brand-primary);
                padding: 0;
                transition: all 0.2s ease-in-out;
            }
            .slick-dots li.slick-active button {
                background-color: var(--chakra-colors-brand-primary) !important;
                border-color: var(--chakra-colors-brand-primary);
            }
            .slick-track {
                display: flex;
                gap: 16px;
                margin-left: 0;
            }
            .slick-slide {
                height: auto;
            }
            .slick-slide > div {
                height: 100%;
            }
        `
        document.head.appendChild(style)
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    return (
        <Container maxW="container.xl" py={8} px={{ base: 4, md: 8 }}>
            <Box position="relative" mx={{ base: 6, md: 10 }}>
                <Slider {...settings}>
                    {filteredProfessionals.map((professional) => (
                        <Box
                            key={professional.id}
                            px={2}
                            height="100%"
                        >
                            <ProfessionalCard professional={professional} />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Container>
    )
} 