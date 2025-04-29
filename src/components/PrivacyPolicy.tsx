import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from '../components/Link';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para Home</span>
        </Link>
        
        <div className="bg-white shadow-sm rounded-lg p-6 sm:p-8 animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700">
              Esta política de privacidade se aplica ao aplicativo Lifenergy (doravante denominado "Aplicativo") 
              para dispositivos móveis, criado pela [Desenvolvedora/Nome da Empresa] (doravante denominada "Provedora de Serviços") 
              como um serviço [de código aberto/gratuito/freemium/suportado por anúncios/comercial]. 
              Este serviço deve ser usado "NO ESTADO EM QUE SE ENCONTRA".
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Coleta e uso de informações</h2>
            <p className="text-gray-700">
              O Aplicativo coleta informações quando você o baixa e o utiliza. Essas informações podem incluir informações como:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Endereço de protocolo de Internet do seu dispositivo (por exemplo, endereço IP)</li>
              <li>As páginas do aplicativo que você visita, a hora e a data da sua visita, o tempo gasto nessas páginas</li>
              <li>O tempo gasto no aplicativo</li>
              <li>O sistema operacional que você usa no seu dispositivo móvel</li>
            </ul>

            <p className="text-gray-700">
              O Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.
            </p>

            <p className="text-gray-700 mt-4">
              O Provedor de Serviços pode usar as informações fornecidas para entrar em contato com você 
              de tempos em tempos para fornecer informações importantes, avisos necessários e promoções de marketing.
            </p>

            <p className="text-gray-700 mt-4">
              Para uma melhor experiência, ao usar o Aplicativo, o Provedor de Serviços pode exigir 
              que você nos forneça certas informações de identificação pessoal [adicione tudo o mais que você 
              coletar aqui, por exemplo, nome do usuário, endereço, localização, fotos]. As informações 
              solicitadas pelo Provedor de Serviços serão retidas por eles e usadas conforme descrito 
              nesta política de privacidade.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Acesso de terceiros</h2>
            <p className="text-gray-700">
              Somente dados agregados e anonimizados são transmitidos periodicamente a serviços externos 
              para auxiliar o Provedor de Serviços a aprimorar o Aplicativo e seus serviços. O Provedor 
              de Serviços poderá compartilhar suas informações com terceiros nas formas descritas nesta 
              declaração de privacidade.
            </p>

            <p className="text-gray-700 mt-4">
              Observe que o Aplicativo utiliza serviços de terceiros que possuem suas próprias Políticas 
              de Privacidade sobre o tratamento de dados. Abaixo estão os links para as Políticas de 
              Privacidade dos provedores de serviços terceirizados utilizados pelo Aplicativo:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>
                <a 
                  href="https://www.google.com/policies/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Serviços do Google Play
                </a>
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              O Provedor de Serviços pode divulgar Informações Fornecidas pelo Usuário e Coletadas Automaticamente:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>conforme exigido por lei, como para cumprir uma intimação ou processo legal semelhante;</li>
              <li>quando acreditarem de boa-fé que a divulgação é necessária para proteger seus direitos, 
                proteger sua segurança ou a segurança de outras pessoas, investigar fraudes ou responder a 
                uma solicitação governamental;</li>
              <li>com seus provedores de serviços confiáveis ​​que trabalham em seu nome, não têm uso 
                independente das informações que divulgamos a eles e concordaram em aderir às regras 
                estabelecidas nesta declaração de privacidade.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Direitos de exclusão</h2>
            <p className="text-gray-700">
              Você pode interromper facilmente toda a coleta de informações pelo Aplicativo desinstalando-o. 
              Você pode usar os processos de desinstalação padrão disponíveis no seu dispositivo móvel ou 
              na loja ou rede de aplicativos móveis.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Política de Retenção de Dados</h2>
            <p className="text-gray-700">
              O Provedor de Serviços manterá os Dados Fornecidos pelo Usuário enquanto você utilizar o 
              Aplicativo e por um prazo razoável após esse período. Caso deseje que eles excluam os Dados 
              Fornecidos pelo Usuário que você forneceu por meio do Aplicativo, entre em contato pelo 
              e-mail carlosirineu@wedjapsicologia.com.br e eles responderão em um prazo razoável.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Crianças</h2>
            <p className="text-gray-700">
              O Provedor de Serviços não usa o Aplicativo para solicitar intencionalmente dados ou fazer 
              marketing para crianças menores de 13 anos.
            </p>

            <p className="text-gray-700 mt-4">
              O Aplicativo não se destina a menores de 13 anos. O Provedor de Serviços não coleta 
              intencionalmente informações de identificação pessoal de crianças menores de 13 anos. 
              Caso o Provedor de Serviços descubra que uma criança menor de 13 anos forneceu informações 
              pessoais, o Provedor de Serviços as excluirá imediatamente de seus servidores. Se você for 
              pai/mãe ou responsável e tiver conhecimento de que seu filho nos forneceu informações 
              pessoais, entre em contato com o Provedor de Serviços (carlosirineu@wedjapsicologia.com.br) 
              para que ele possa tomar as medidas necessárias.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Segurança</h2>
            <p className="text-gray-700">
              O Provedor de Serviços se preocupa em proteger a confidencialidade das suas informações. 
              O Provedor de Serviços fornece salvaguardas físicas, eletrônicas e processuais para proteger 
              as informações que processa e mantém.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Mudanças</h2>
            <p className="text-gray-700">
              Esta Política de Privacidade poderá ser atualizada periodicamente, por qualquer motivo. 
              O Provedor de Serviços notificará você sobre quaisquer alterações na Política de Privacidade, 
              atualizando esta página com a nova Política de Privacidade. Recomendamos que você consulte 
              esta Política de Privacidade regularmente para verificar quaisquer alterações, pois o uso 
              contínuo é considerado aprovação de todas as alterações.
            </p>

            <p className="text-gray-700 mt-4">
              Esta política de privacidade está em vigor desde 29/04/2025
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Seu Consentimento</h2>
            <p className="text-gray-700">
              Ao usar o Aplicativo, você concorda com o processamento de suas informações conforme 
              estabelecido nesta Política de Privacidade agora e conforme alterada por nós.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contate-nos</h2>
            <p className="text-gray-700">
              Caso você tenha alguma dúvida sobre privacidade ao usar o Aplicativo, ou tenha dúvidas 
              sobre as práticas, entre em contato com o Provedor de Serviços pelo e-mail 
              carlosirineu@wedjapsicologia.com.br.
            </p>

            <hr className="my-6" />

            <p className="text-gray-500 text-sm">
              Esta página de política de privacidade foi gerada pelo{" "}
              <a 
                href="https://app-privacy-policy-generator.nisrulz.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
              >
                App Privacy Policy Generator
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;