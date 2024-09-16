import Header from '../components/Header'

import Arduino from '../assets/componentes/arduino.svg'
import Uno from '../assets/componentes/arduino uno.png'
import Led from '../assets/componentes/led.svg'
import Fio from '../assets/componentes/Fio.svg'
import Modulo from '../assets/componentes/modulo.svg'
import Bomba2 from '../assets/componentes/bomba2.svg'
import Mixer from '../assets/componentes/mixer.png'
import Servo from '../assets/componentes/servo.svg'
import Sensor from '../assets/componentes/sensor.svg'
import Rele from '../assets/componentes/rele.svg'
import Acrilico from '../assets/componentes/acrilico.png'
import Cano from '../assets/componentes/cano.png'
import Mangueira from '../assets/componentes/mangueira.png'

function Componentes() {
  return (    
        <main>
        <section className='bg-gradient-to-t from-bg-blue to-slate-900'>
        <Header />

          <h1 className="text-tittle-green text-3xl uppercase font-inter text-center font-black md:text-6xl m-10 mb-36">Componentes</h1>
          
          <div className="arduino flex itens-center justify-center lg:ml-9">
            
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Arduino} className="bg-tittle-green rounded-lg mx-auto w-56 mb-6 md:p-6 md:mb-0 lg:w-96" alt="Imagem de um Arduino" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green text-center font-inter text-lg font-bold mb-4">Arduino Mega</h2>
                <p className="w-80 lg:w-auto ml-9 lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2">
                  <span className="font-bold">Função:</span> O Arduino Mega é uma placa de microcontrolador projetada para projetos mais complexos e que exigem mais recursos do que as placas Arduino padrão, como o Uno. Ele possui um número maior de pinos digitais e analógicos, mais memória (RAM, flash e EEPROM), e um microcontrolador mais potente (ATmega2560)
                </p>
                <p className="w-80 lg:w-auto ml-9 lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2">
                  <span className="font-bold">Preço:</span> R$ 219,90
                </p>
              </div>
            </div>
          </div>

          <div className="bomba flex itens-center justify-center">
            <div className="lg:max-w-7xl flex flex-col-reverse items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mb-32">
              
              <div className="texto">
              <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Arduino Uno</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  O Arduino Uno é uma placa de prototipagem eletrônica amplamente utilizada em projetos de automação, robótica e eletrônica. Baseado no microcontrolador ATmega328P, ele oferece 14 pinos digitais, 6 pinos analógicos e uma porta USB para conexão com o computador, permitindo fácil programação.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 11,90</p>
              </div>

              <img src={Uno} className='w-56 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem da bomba" />
            </div>
          </div>

          <div className="sensor flex itens-center justify-center">
            
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mb-32 ">
              <img src={Sensor} className='w-56 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem da bomba" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Sensor Ultrassônico</h2>   
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O sensor ultrassônico para Arduino mede distâncias emitindo ondas sonoras e calculando o tempo de retorno após refletirem em um objeto. Com essa informação, ele determina a distância precisa entre o sensor e o objeto, sendo ideal para projetos de robótica e automação que exigem detecção de obstáculos ou medições de proximidade.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 11,90</p>
              </div>
            </div>
          </div>

          <div className="Sonico flex itens-center justify-center">
            
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:gap-40 lg:mb-32 ">
              <img src={Bomba2} className='w-56 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de uma lampada de led" />
              <div className="texto lg:max-w-7xl">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Bomba de água</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> A bomba de água não submersível é um dispositivo utilizado para mover líquidos sem a necessidade de estar imersa na água. Geralmente posicionada fora do reservatório, ela suga o líquido através de uma entrada e o empurra para um local de destino.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 11,90</p>
                
              </div>
            </div>
          </div>

          <div className="Fios flex itens-center justify-center">
            
            <div className="lg:max-w-7xl flex flex-col items-center justify-center lg:gap-40 md:flex-row md:items-center lg:mb-32">
              <img src={Fio} className='w-56 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de alguns fios" />
              <div className="texto flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Fios, conectores e componentes eletrônicos diversos</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Eles variam em tipo e tamanho, incluindo jumpers, cabos macho-macho e macho-fêmea, e são essenciais para trocar dados e sinais elétricos entre o Arduino e os dispositivos externos em um projeto eletrônico.</p>
                <p className="lg:w-auto w-80 lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 25,00</p>
              </div>
            </div>
          </div>

          <div className="Bluetooh flex itens-center justify-center">
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row-reverse md:items-center justify-around lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Modulo} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um módulo Bluetooh"/>
              <div className="texto lg:ml-9">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Módulo Bluetooh</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O módulo Bluetooth para Arduino permite comunicação sem fio com dispositivos como smartphones e computadores, facilitando troca de dados, controle remoto, transmissão de informações de sensores e recebimento de comandos. Ideal para automação, robótica e dispositivos móveis.</p>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> 13,00 a 40,00 reais.</p>
              </div>
            </div>
          </div>

          <div className="Relé flex itens-center justify-center">
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Rele} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um módulo Bluetooh" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Relé</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Atua como um interruptor controlado eletronicamente, permitindo que o Arduino controle dispositivos de alta potência ou alta tensão, como lâmpadas, motores e eletrodomésticos, que não podem ser diretamente alimentados pelos pinos do Arduino devido à sua baixa corrente e tensão.</p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 12,90</p>
              </div>
            </div>
          </div>

          <div className="led flex itens-center justify-center">
            
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Led} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de uma lampada de led" />
              <div className="texto lg:ml-9">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Iluminação LED</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O LED UV em sistemas de cultivo indoor estimula o crescimento e produção de compostos benéficos nas plantas, aumentando sua resistência a pragas e doenças. Com Arduino, é possível controlar com precisão a intensidade e duração da exposição, otimizando o cultivo de acordo com as necessidades das plantas.</p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span>  37,90.</p>
              </div>
            </div>
          </div>

          <div className="Mixer flex itens-center justify-center">
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Mixer} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Mixer</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O mixer é um dispositivo eletromecânico utilizado para misturar ou homogeneizar substâncias, geralmente líquidos ou ingredientes de diferentes naturezas. Composto por um motor e hélices ou lâminas, ele pode ser encontrado em diversos tamanhos e formatos, desde modelos simples de uso doméstico até versões industriais para misturas complexas.
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 9,90</p>
              </div>
            </div>
          </div>

          <div className="Servo Motor flex itens-center justify-center lg:ml-9">
            
            <div className="lg:mb-32 lg:max-w-7xl flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:gap-40  pb-8 ">
              <img src={Servo} className=' w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Servo Motor</h2>
                <p className="w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O servo motor é um atuador que oferece controle preciso de posição, velocidade e torque, sendo amplamente utilizado em projetos de robótica, automação e modelismo. Ele é composto por um motor de corrente contínua, um conjunto de engrenagens, um potenciômetro e um circuito de controle, que ajusta sua posição de acordo com sinais de controle PWM (modulação por largura de pulso).
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 17,90</p>
              </div>
            </div>
          </div>

          <div className="Mixer flex itens-center justify-center">
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Acrilico} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Acrilico</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O acrílico é um material plástico transparente, leve e resistente, amplamente utilizado em diversas indústrias devido às suas propriedades versáteis. Ele possui excelente resistência a impactos e é uma alternativa ao vidro, oferecendo maior segurança e durabilidade.
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 89,90</p>
              </div>
            </div>
          </div>

          <div className="Servo Motor flex itens-center justify-center lg:ml-9 lg:mb-32">
            
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row-reverse md:items-center lg:gap-40  pb-8 ">
              <img src={Cano} className=' w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Cano de PVC</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O cano de PVC (policloreto de vinila) é um tubo plástico amplamente utilizado em sistemas de encanamento, condução de água, esgoto, drenagem e instalações elétricas. Ele se destaca por ser leve, resistente à corrosão, durável e de fácil instalação, além de ser econômico.
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 75,00</p>
              </div>
            </div>
          </div>

          <div className="Mixer flex itens-center justify-center ">
            <div className="lg:max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-center lg:gap-40 lg:mr-9 lg:mb-32">
              <img src={Mangueira} className='w-56 lg:ml-9 bg-tittle-green rounded-lg mx-auto p-2xl mb-6 md:p-6 md:mb-0 md:mr-6 lg:w-96' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <h2 className="lg:mb-12 lg:text-3xl text-tittle-green font-inter text-center text-lg font-bold mb-4">Mangueira</h2>
                <p className=" w-80 lg:w-auto lg:text-x29 text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> A mangueira é um tubo flexível utilizado para transportar líquidos, gases ou substâncias granuladas. Feita de materiais como borracha, PVC ou silicone, ela é amplamente empregada em diversas aplicações, como jardinagem, irrigação, abastecimento de água, transporte de combustível e até em indústrias químicas..
                </p>
                <p className="lg:text-x29 text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2 md:mt-2"> <span className='font-bold'>Preço:</span> R$ 2,34</p>
              </div>
            </div>
          </div>
        </section>
        </main>
  )
}

export default Componentes