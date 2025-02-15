'use client'
import { Profissional } from '@barba/core'
import { useProfissionais } from '@barba/ui'
import ProfissionalItem from '@/components/profissional/ProfissionalItem'
import Titulo from '@/components/shared/Titulo'

export default function NossosProfissionais() {
    const { profissionais } = useProfissionais()

    return (
        <div className="container flex flex-col items-center gap-y-16">
            <Titulo
                tag="Time"
                principal="Nosso Galáctico"
                secundario="Aqui Está o Que Há de Melhor! Orgulho-me de trazer qualidade superior para você."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {profissionais.map((profissional: Profissional) => (
                    <ProfissionalItem key={profissional.id} profissional={profissional} />
                ))}
            </div>
        </div>
    )
}
