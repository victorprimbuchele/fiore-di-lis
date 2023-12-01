export const HomeContactSection: React.FC = () => {
    return (
        <section id='contato' className='text-white px-12 pb-20 md:px-24 md:32 2xl:pb-40 2xl:px-36 min-[2000px]:px-48' key="contact">
            <div className='flex flex-col items-center mb-6 md:mb-12 2xl:mb-20'>
                <h2 className='pt-20 md:pt-24 2xl:pt-40 border-b-8 border-b-red-italy font-serif text-4xl md:text-5xl 2xl:text-6xl w-fit'>CONTATO</h2>
            </div>
            <div className='flex flex-col md:flex-row text-white justify-center items-center lg:items-left lg:justify-between'>
                <img src="https://fiore-di-lis-2.s3.us-east-2.amazonaws.com/assets/Home/Section/Contact/location.png" alt='Mapa da localização apresentada no texto ao lado.' className='sm:w-1/2 2xl:w-1/3' />
                <div className="pt-4 md:pt-0 md:text-xl 2xl:text-2xl md:ps-16 md:leading-10">
                    <p className="pb-8">
                        Estamos localizados na Rua Manoel Medeiros Borges, nº 1628, Areias, São José
                    </p>
                    <div className="pb-8">
                        <p>
                            HORÁRIO DE ATENDIMENTO
                        </p>
                        <p>
                            Em breve teremos atendimento presencial.
                        </p>
                    </div>
                    <div className="pb-8">
                        <p>
                            DELIVERY
                        </p>
                        <p>
                            Sexta-feira - Domingo  18:30h - 00:00h
                        </p>
                    </div>
                    <div className="pb-8">
                        <p>
                            TELEFONE
                        </p>
                        <p>
                            (48) 99938-4965
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}