// Previous code remains the same...

{/* Planos Mobile - com scroll horizontal */}
<div className="block md:hidden">
  <div className="relative">
    <div className="overflow-x-auto pb-6 -mx-4 px-4">
      <div className="flex gap-4 snap-x snap-mandatory">
        {/* Plano MEI */}
        <div className="flex-shrink-0 w-[280px] snap-center">
          <Card className="h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-focus-blue font-bold text-sm">MEI</span>
              </div>
              <CardTitle className="text-lg text-focus-gray">MEI Digital</CardTitle>
              <CardDescription className="text-xl font-bold text-focus-gray">R$ 79<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pb-4">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-focus-gray">{feature.name}</span>
                  {feature.mei ? (
                    <Check className="w-4 h-4 text-focus-green" />
                  ) : (
                    <X className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(meiWhatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plano Essencial */}
        <div className="flex-shrink-0 w-[280px] snap-center">
          <Card className="h-full relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-focus-green text-white px-3 py-1 rounded-full text-xs font-medium z-10">
              Mais Popular
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-focus-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-focus-green font-bold text-sm">ESS</span>
              </div>
              <CardTitle className="text-lg text-focus-gray">Essencial</CardTitle>
              <CardDescription className="text-xl font-bold text-focus-gray">R$ 199<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pb-4">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-focus-gray">{feature.name}</span>
                  {feature.essencial ? (
                    <Check className="w-4 h-4 text-focus-green" />
                  ) : (
                    <X className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-focus-green hover:bg-focus-green/90 font-medium" onClick={() => window.open(essencialWhatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plano Pro */}
        <div className="flex-shrink-0 w-[280px] snap-center">
          <Card className="h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-focus-blue to-focus-green rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">PRO</span>
              </div>
              <CardTitle className="text-lg text-focus-gray">Pro Digital</CardTitle>
              <CardDescription className="text-xl font-bold text-focus-gray">R$ 299<span className="text-sm text-focus-gray/60">/mês</span></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pb-4">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-focus-gray">{feature.name}</span>
                  {feature.pro ? (
                    <Check className="w-4 h-4 text-focus-green" />
                  ) : (
                    <X className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-focus-blue to-focus-green hover:from-focus-blue/90 hover:to-focus-green/90 text-white font-medium" onClick={() => window.open(proWhatsappUrl, '_blank')}>
                  Escolher Plano
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plano Personalizado */}
        <div className="flex-shrink-0 w-[280px] snap-center">
          <Card className="h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-focus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-focus-blue font-bold text-xs">PERS</span>
              </div>
              <CardTitle className="text-lg text-focus-gray">Personalizado</CardTitle>
              <CardDescription className="text-xl font-bold text-focus-gray">Sob consulta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pb-4">
              <div className="text-center text-focus-gray/70 text-sm mb-4">
                Plano sob medida para as necessidades específicas da sua empresa
              </div>
              <div className="pt-4">
                <Button className="w-full bg-focus-blue hover:bg-focus-blue/90 font-medium" onClick={() => window.open(personalizadoWhatsappUrl, '_blank')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    {/* Pagination dots */}
    <div className="flex justify-center gap-2 mt-4">
      {[0, 1, 2, 3].map((index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentPlan === index ? 'bg-focus-blue w-4' : 'bg-focus-blue/30'
          }`}
          onClick={() => setCurrentPlan(index)}
        />
      ))}
    </div>

    {/* Mobile scroll hint */}
    <div className="text-center mt-4">
      <p className="text-sm text-focus-gray/60 flex items-center justify-center gap-2">
        <span>Deslize para ver todos os planos</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="animate-pulse">
          <path d="M14 2L18 6L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </p>
    </div>
  </div>
</div>

// Rest of the code remains the same...