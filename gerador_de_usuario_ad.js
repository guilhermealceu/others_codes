import wixWindowFrontend from 'wix-window-frontend';

$w.onReady(function () {

});

export function btncopiarcodigo1_click(event) {

    $w('#statebox8').changeState("State2")
}

export function BtnGerador_click(event) {
    $w('#statebox8').changeState("State2");
}

export function camponame_keyPress(event) {
    $w('#input3').value = $w('#camponame').value + ' ' + $w('#camposobrename').value;

}

export function campologin_keyPress(event) {
    $w('#input4').value = $w('#campologin').value + "@pr.NOMEDAEMPRESA.com.br";

    // Gerar um número aleatório de 3 dígitos
    const numeroAleatorio = Math.floor(100 + Math.random() * 900); // Gera números entre 100 e 999

    $w('#input5').value = "NOMEDAEMPRESA@" + numeroAleatorio;
}

export function dropdownunidade_change(event) {
    if ("AAI" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Assessoria de Auditoria Interna - AAI"
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users"
        $w('#input6').value = "Curitiba"
        $w('#input10').value = "CURITIBA"
        $w('#input16').value = "AAI"
        $w('#input11').value = "80220-300"
        $w('#input12').value = "Rua Caete, 150 - Prado Velho"
        $w('#input13').value = "CN=Carlos Alexandre Andrade Mendes,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp"
    }

    if ("APUCARANA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Norte - Escritorio de Apucarana";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/APUCARANA/users";
        $w('#input6').value = "Apucarana";
        $w('#input10').value = "APUCARANA";
        $w('#input16').value = "APUCARANA";
        $w('#input11').value = "86800-220";
        $w('#input12').value = "Avenida Irati, 602 - Barra Funda";
        $w('#input13').value = "CN=Fabricio Pires Bianchi,OU=users,OU=LONDRINA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("ARAPONGAS" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Norte - Escritorio de Arapongas";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/ARAPONGAS/users";
        $w('#input6').value = "Arapongas";
        $w('#input10').value = "ARAPONGAS";
        $w('#input16').value = "ARAPONGAS";
        $w('#input11').value = "86701-901";
        $w('#input12').value = "Praça Doutor Júlio Junqueira, 88 - 13º andar";
        $w('#input13').value = "CN=Fabricio Pires Bianchi,OU=users,OU=LONDRINA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("ASSESSORIA TÉCNICA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Assessoria Técnica";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "direx";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Vitor Roberto Tioqueta,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("BARRACAO" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Sul - Pato Branco - Escritório Barracão";
        $w('#input8').value = " pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PATO BRANCO/users";
        $w('#input6').value = "Pato Branco";
        $w('#input16').value = "pb";
        $w('#input10').value = "PATO BRANCO";
        $w('#input11').value = "85504-000";
        $w('#input12').value = "Av. Tupi, 333 - Bortot";
        $w('#input13').value = "CN=Cesar Giovani C. Goncalves,OU=users,OU=PATO BRANCO,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("CASCAVEL" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Oeste - Cascavel";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CASCAVEL/users";
        $w('#input6').value = "Cascavel";
        $w('#input16').value = "CAS";
        $w('#input10').value = "CASCAVEL";
        $w('#input11').value = "85805-000";
        $w('#input12').value = "Rua Vitória, 2564 - Centro";
        $w('#input13').value = "CN=Augusto Cesar Stein,OU=users,OU=CASCAVEL,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("CERRO AZUL" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Leste - Escritorio de Articulação de Cerro Azul";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input16').value = "rleste";
        $w('#input10').value = "CURITIBA";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Weliton Monteiro Perdomo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("CIANORTE" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Noroeste - Escritorio de Articulação de Cianorte";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/MARINGA/users";
        $w('#input6').value = "Cianorte";
        $w('#input16').value = "mar";
        $w('#input10').value = "CIANORTE";
        $w('#input11').value = "87200-129";
        $w('#input12').value = "Av. Santa Catariana, 683 - Zona 01";
        $w('#input13').value = "CN=Wendell Myler da Silva Gussoni,OU=users,OU=MARINGA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("CORNÉLIO PROCOPIO" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Norte - Escritorio de Articulação de Cornélio Procópio";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/LONDRINA/users";
        $w('#input6').value = "Cornélio Procópio";
        $w('#input16').value = "lon";
        $w('#input10').value = "Cornélio Procópio";
        $w('#input11').value = "86300-000";
        $w('#input12').value = "Rua Mato Grosso, 110 - Centro";
        $w('#input13').value = "CN=Fabricio Pires Bianchi,OU=users,OU=LONDRINA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("DIREX" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Direx";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input16').value = "DIREX";
        $w('#input10').value = "CURITIBA";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=José Gava Neto,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("FOZ DO IGUAÇU" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Oeste - Escritorio de Foz do Iguaçu";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/FOZ DO IGUACU/users";
        $w('#input6').value = "Foz do Iguaçu";
        $w('#input16').value = "FOZ";
        $w('#input10').value = "FOZ DO IGUACU";
        $w('#input11').value = "85864-470";
        $w('#input12').value = "Rua Guianas, 151";
        $w('#input13').value = "CN=Augusto Cesar Stein,OU=users,OU=CASCAVEL,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("FRANCISCO BELTRAO" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Sul - Escritorio de Francisco Beltrao";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/FRANCISCO BELTRAO/users";
        $w('#input6').value = "Francisco Beltrao";
        $w('#input16').value = "FB";
        $w('#input10').value = "FRANCISCO BELTRAO";
        $w('#input11').value = "85601-010";
        $w('#input12').value = "Rua Sao Paulo, 1212 - Centro";
        $w('#input13').value = "CN=Cesar Giovani C. Goncalves,OU=users,OU=PATO BRANCO,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("GUARAPUAVA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Centro - Escritorio de Guarapuava";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/GUARAPUAVA/users";
        $w('#input6').value = "Guarapuava";
        $w('#input16').value = "GPV";
        $w('#input10').value = "GUARAPUAVA";
        $w('#input11').value = "85010-070";
        $w('#input12').value = "Rua Arlindo Ribeiro, 892";
        $w('#input13').value = "CN=Joel Franzim Junior,OU=users,OU=PONTA GROSSA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("IVAIPORA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Norte - Escritorio de Ivaipora";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/IVAIPORA/users";
        $w('#input6').value = "Ivaipora";
        $w('#input16').value = "IVA";
        $w('#input10').value = "IVAIPORA";
        $w('#input11').value = "86870-000";
        $w('#input12').value = "Av. Castelo Branco, 1057";
        $w('#input13').value = "CN=Fabricio Pires Bianchi,OU=users,OU=LONDRINA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("JACAREZINHO" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Norte - Escritorio de Jacarezinho";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/JACAREZINHO/users";
        $w('#input6').value = "Jacarezinho";
        $w('#input16').value = "JAC";
        $w('#input10').value = "JACAREZINHO";
        $w('#input11').value = "86400-000";
        $w('#input12').value = "Rua Coronel Figueiredo 749 - Centro";
        $w('#input13').value = "CN=Fabricio Pires Bianchi,OU=users,OU=LONDRINA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("LARANJEIRAS DO SUL" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Sul - Cascavel - Escritorio Laranjeiras";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CASCAVEL/users";
        $w('#input6').value = "Laranjeiras do Sul";
        $w('#input16').value = "cas";
        $w('#input10').value = "CASCAVEL - Escritorio Laranjeiras";
        $w('#input11').value = "85303-000";
        $w('#input12').value = "Av. Deputado Ivan Ferreira do Amaral 63 - São Francisco";
        $w('#input13').value = "CN=Augusto Cesar Stein,OU=users,OU=CASCAVEL,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("LONDRINA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Norte - Londrina";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/LONDRINA/users";
        $w('#input6').value = "Londrina";
        $w('#input16').value = "LON";
        $w('#input10').value = "LONDRINA";
        $w('#input11').value = "86039-090";
        $w('#input12').value = "Rua Santos Dumont, 1335 - Boa Vista";
        $w('#input13').value = "CN=Fabricio Pires Bianchi,OU=users,OU=LONDRINA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("MARINGA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Noroeste - Maringá";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/MARINGA/users";
        $w('#input6').value = "Maringá";
        $w('#input16').value = "MAR";
        $w('#input10').value = "MARINGA";
        $w('#input11').value = "87030-010";
        $w('#input12').value = "Av. Bento Munhoz da Rocha Neto 1116 - Zona 07";
        $w('#input13').value = "CN=Wendell Myler da Silva Gussoni,OU=users,OU=MARINGA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("PARANAGUA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Leste - Escritorio de Paranagua";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PARANAGUA/users";
        $w('#input6').value = "Paranagua";
        $w('#input16').value = "PGA";
        $w('#input10').value = "PARANAGUA";
        $w('#input11').value = "83203-742";
        $w('#input12').value = "Av. Gabriel de Lara, 332 - João Gualberto";
        $w('#input13').value = "CN=Weliton Monteiro Perdomo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("PARANAVAI" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Noroeste - Escritorio de Paranavai";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PARANAVAI/users";
        $w('#input6').value = "Paranavai";
        $w('#input16').value = "PVA";
        $w('#input10').value = "PARANAVAI";
        $w('#input11').value = "87701-060";
        $w('#input12').value = "Rua Souza Naves, 1927 - Centro";
        $w('#input13').value = "CN=Wendell Myler da Silva Gussoni,OU=users,OU=MARINGA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("PATO BRANCO" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Sul - Pato Branco";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PATO BRANCO/users";
        $w('#input6').value = "Pato Branco";
        $w('#input16').value = "PB";
        $w('#input10').value = "PATO BRANCO";
        $w('#input11').value = "85504-000";
        $w('#input12').value = "Av. Tupi, 333 - Bortot";
        $w('#input13').value = "CN=Cesar Giovani C. Goncalves,OU=users,OU=PATO BRANCO,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("POLO NACIONAL DE LIDERANÇA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Polo Nacional de Liderança";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input16').value = "DIREX";
        $w('#input10').value = "CURITIBA";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Vitor Roberto Tioqueta,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("PONTA GROSSA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Centro - Ponta Grossa";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PONTA GROSSA/users";
        $w('#input6').value = "Ponta Grossa";
        $w('#input16').value = "PG";
        $w('#input10').value = "PONTA GROSSA";
        $w('#input11').value = "84025-002";
        $w('#input12').value = "R. Dr. Lauro Cunha Fortes, 450 - Uvaranas";
        $w('#input13').value = "CN=Joel Franzim Junior,OU=users,OU=PONTA GROSSA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("REGIONAL CURITIBA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Curitiba";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input16').value = "cwb";
        $w('#input10').value = "CURITIBA";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Joailson Antonio Agostinho,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("REGIONAL LESTE" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Leste";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input16').value = "rleste";
        $w('#input10').value = "CURITIBA";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Weliton Monteiro Perdomo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("SÃO JOSÉ DOS PINHAIS" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Leste - Escritorio de São José dos Pinhais";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/SAO JOSE DOS PINHAIS/users";
        $w('#input6').value = "São José dos Pinhais";
        $w('#input16').value = "SJP";
        $w('#input10').value = "SÃO JOSÉ DOS PINHAIS";
        $w('#input11').value = "83030-720";
        $w('#input12').value = "Rua Passos de Oliveira, 1360 - Centro";
        $w('#input13').value = "CN=Weliton Monteiro Perdomo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("TELEMACO BORBA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Centro - Ponta Grossa - Escritório Telêmaco Borba";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PONTA GROSSA/users";
        $w('#input6').value = "Telêmaco Borba";
        $w('#input16').value = "pg";
        $w('#input10').value = "Telêmaco Borba";
        $w('#input11').value = "84261-020";
        $w('#input12').value = "Av. Vice-Prefeito Reginaldo Guedes Nocera, 250 - Bairro Centro";
        $w('#input13').value = "CN=Joel Franzim Junior,OU=users,OU=PONTA GROSSA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("TOLEDO" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Oeste - Escritorio de Toledo";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/TOLEDO/users";
        $w('#input6').value = "Toledo";
        $w('#input16').value = "TOL";
        $w('#input10').value = "TOLEDO";
        $w('#input11').value = "85905-380";
        $w('#input12').value = "Av.Parigot de Souza, 2339";
        $w('#input13').value = "CN=Augusto Cesar Stein,OU=users,OU=CASCAVEL,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UAJ" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Assessoria Jurídica - UAJ";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input16').value = "UAJ";
        $w('#input10').value = "CURITIBA";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Mauricio Miyake,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UANE" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Ambiente e Negócios Empresariais - UANE";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UANE";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Luiz Marcelo Padilha,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UAR" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Atendimento e Relacionamento - UAR";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UAR";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Vania Paula Cruz,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UANE" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Ambiente e Negócios Empresariais - UANE";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UANE";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Luiz Marcelo Padilha,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UAR" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Atendimento e Relacionamento - UAR";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UAR";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Vania Paula Cruz,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UCF" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Controladoria e Finanças - UCF";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UCF";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Emerson Angelo Dalla Stella,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UGE" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Gestão Estratégica - UGE";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UGE";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Agnaldo Gerson Castanharo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UGIP" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Gestão e Inovação de Produtos - UGIP";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UGIP";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Joana Darc Julia de Melo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UGP" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Gestão de Pessoas - UGP";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UGP";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Daniele Klosovski Insaurralde,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UIC" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Integridade Corporativa - UIC";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UIC";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Larissa Dias Botion,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UMC" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade Marketing e Comunicação - UMC";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UMC";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Fabíola Negrão,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UMUARAMA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Noroeste - Escritório de Umuarama";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/UMUARAMA/users";
        $w('#input6').value = "Umuarama";
        $w('#input10').value = "UMUARAMA";
        $w('#input16').value = "UMUARAMA";
        $w('#input11').value = "87501-290";
        $w('#input12').value = "Rua Floraí, 4295 - Zona I";
        $w('#input13').value = "CN=Wendell Myler da Silva Gussoni,OU=users,OU=MARINGA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UNIAO DA VITORIA" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Regional Sul - Pato Branco - Escritório União da Vitória";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/PATO BRANCO/users";
        $w('#input6').value = "União da Vitória";
        $w('#input16').value = "pb";
        $w('#input10').value = "Regional Sul - Escritório União da Vitoria";
        $w('#input11').value = "85504-000";
        $w('#input12').value = "Av. Tupi, 333 - Bortot";
        $w('#input13').value = "CN=Cesar Giovani C. Goncalves,OU=users,OU=PATO BRANCO,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

    if ("UTIC" === $w('#dropdownunidade').value) {
        $w('#input7').value = "Unidade de Tecnologia da Informação e da Comunicação - UTIC";
        $w('#input8').value = "pr.NOMEDAEMPRESA.corp/NOMEDAEMPRESA-PR/CURITIBA/users";
        $w('#input6').value = "Curitiba";
        $w('#input10').value = "CURITIBA";
        $w('#input16').value = "UTIC";
        $w('#input11').value = "80220-300";
        $w('#input12').value = "Rua Caete, 150 - Prado Velho";
        $w('#input13').value = "CN=Tatiana Peruzzo,OU=users,OU=CURITIBA,OU=NOMEDAEMPRESA-PR,DC=pr,DC=NOMEDAEMPRESA,DC=corp";
    }

}

export function dropdowncargo_change(event) {
    const cargoParaTemplate = {
        "Aprendiz": "Aprendiz",
        "Assistente": "Assistente",
        "Consultor": "Consultor",
        "Consultor - Gerente Regional Curitiba": "Consultor",
        "Consultor - Gerente Regional Leste": "Consultor",
        "Consultor - Gerente A": "Consultor",
        "Consultor - Gerente B": "Consultor",
        "Consultor - Gerente C": "Consultor",
        "Consultor - Gerente D": "Consultor",
        "Consultor - Gerente E": "Consultor",
        "Consultor - Gerente F": "Consultor",
        "Consultor - Gerente G": "Consultor",
        "Consultor - Gerente H": "Consultor",
        "Consultor - Gerente I": "Consultor",
        "Consultor - Gerente J": "Consultor",
        "Diretor de Administração e Finanças": "Consultor",
        "Diretor Superintendente": "Consultor",
        "Diretor Técnico": "Consultor",
        "Estagiário": "estagiario",
        "Temporários - A": "Aa",
        "Terceiro - B": "Bb",
        "Terceiro - C": "terceiros",
        "Terceiro - D": "terceiros",
        "Terceiro - E": "terceiros",
        "Terceiro - F": "terceiros",
        "Terceiro - G": "terceiros",
        "Terceiro - H": "terceiros",
        "Terceiro - I": "terceiros",
        "Terceiro - J": "terceiros",
        "Terceiro - AA": "terceiroop",
        "Terceiro - Empresa": "terceiros",
        "Terceiro - Empresa2": "terceiros",
        "Terceiro - Empresa3": "terceiros",
        "Terceiro - Empresa4": "terceiros",
        "Usuário de Serviço do Sistema": "Sistema-"
    };

    const selectedCargo = $w('#dropdowncargo').value;
    const selectedTemplate = cargoParaTemplate[selectedCargo];

    $w('#input9').value = selectedCargo;
    $w('#input14').value = selectedTemplate;
}

export function dropdowngenero_change(event) {

    if ('H' === $w('#dropdowngenero').value) {
        $w('#input15').value = "PR-Grupo NOMEDAEMPRESA H"
    }

    if ('M' === $w('#dropdowngenero').value) {
        $w('#input15').value = "PR-Grupo NOMEDAEMPRESA M"
    }
}

export function btnClean_click(event) {
    //CAMPOS DE PREENCHIMENTO
    $w('#camponame').value = ' '
    $w('#camposobrename').value = ' '
    $w('#campologin').value = ' '
    $w('#dropdownunidade').value = ' '
    $w('#dropdowncargo').value = ' '
    $w('#dropdowngenero').value = ' '
    //EXIBICAO
    $w('#input3').value = ' '
    $w('#input4').value = ' '
    $w('#input5').value = ' '
    $w('#input6').value = ' '
    $w('#input7').value = ' '
    $w('#input8').value = ' '
    $w('#input9').value = ' '
    $w('#input10').value = ' '
    $w('#input11').value = ' '
    $w('#input12').value = ' '
    $w('#input13').value = ' '
    $w('#input14').value = ' '
    $w('#input15').value = ' '
    $w('#input16').value = ' '
    $w('#textBox1').value = ' '
}

export function btnfecharsavecms_click(event) {
    $w('#boxSalvarcmsdados').hide();
}

export function text20_viewportEnter(event) {
    $w('#boxSalvarcmsdados').show();
}

export function geradorde_script(params) {
    const login = $w('#campologin').value; // Usar o valor do campo de login
    const firsname = $w('#camponame').value;
    const lastname = $w('#camposobrename').value;
    const displayName = $w('#input3').value;
    const email = $w('#input4').value;
    const senha = $w('#input5').value;
    const cidade = $w('#input6').value;
    const unidade = $w('#input7').value;
    const ou = $w('#input8').value;
    const cargo = $w('#input9').value;
    const local = $w('#input10').value;
    const cep = $w('#input11').value;
    const endereco = $w('#input12').value;
    const gerente = $w('#input13').value;
    const template = $w('#input14').value;
    const grupoGenero = $w('#input15').value; // Valor do grupo com base no dropdown
    const templateCity = $w('#input16').value;

    const script = `
        Invoke-Command {
            Import-Module ActiveDirectory
Start-Sleep -Seconds 2
            New-RemoteMailbox -UserPrincipalName "${email}" -Alias "${login}" -SamAccountName "${login}" -Name "${displayName}" -FirstName "${firsname}" -LastName "${lastname}" -OnPremisesOrganizationalUnit "${ou}" -Password (ConvertTo-SecureString -String "${senha}" -AsPlainText -Force)
            Set-ADUser -Identity "${login}" -Description "${cargo}"
            Set-ADUser -Identity "${login}" -Office "${local}"
            Set-ADUser -Identity "${login}" -postalCode "${cep}"
            Set-ADUser -Identity "${login}" -streetAddress "${endereco}"
            Set-ADUser -Identity "${login}" -Company "NOMEDAEMPRESA"
            Set-ADUser -Identity "${login}" -Country "BR"
            Set-ADUser -Identity "${login}" -State "Paraná"
            Set-ADUser -Identity "${login}" -City "${cidade}"
            Set-ADUser -Identity "${login}" -Title "${cargo}"
            Set-ADUser -Identity "${login}" -Department "${unidade}"
            Set-ADUser -Identity "${login}" -Manager "${gerente}"
    
        }
        Start-Sleep -Seconds 3
        Invoke-Command {Get-ADUser -Identity "${template+templateCity}" -Properties memberof | Select-Object -ExpandProperty memberof | Add-ADGroupMember -Members "${login}"}

        Start-Sleep -Seconds 4
        Invoke-Command {Add-ADGroupMember -Identity "${grupoGenero}" -Members "${login}"}	

    `;

    $w('#textBox1').value = script;

    $w('#statebox8').changeState("State3")
}

export function btccriarnovo_click(event) {
    $w('#statebox8').changeState("State1");
    btnClean_click();
}

// Função para copiar o texto gerado para a área de transferência
$w("#btnCopiarTexto").onClick(function () {
    const textoParaCopiar = $w("#textBox1").value;

    wixWindowFrontend.copyToClipboard(textoParaCopiar)
        .then(() => {
            console.log("Texto copiado com sucesso.");
        })
        .catch((err) => {
            console.error("Erro ao copiar o texto:", err);
        });
});

export function btnGerarNovamente_click(event) {
    $w('#statebox8').changeState("State1")
}

export function btnLock_click(event) {

    $w('#boxLock').hide();
    $w('#btnLock').hide();
    $w('#btnUnlock').show();

}

export function btnUnlock_click(event) {

    $w('#boxLock').show();
    $w('#btnLock').show();
    $w('#btnUnlock').hide();
}

$w("#campologin").onChange((event) => {
    const input = $w("#campologin");
    let login = input.value.trim(); // Remova espaços em branco antes e depois

    // Verifique se o campo não está vazio
    if (login) {
        // Garanta que o login tenha pelo menos 2 caracteres
        if (login.length >= 2) {
            // Transforme as duas primeiras letras em maiúsculas
            login = login.substring(0, 2).toUpperCase() + login.substring(2);
            input.value = login;
        } else {
            // Se o campo tiver menos de 2 caracteres, avise o usuário
            input.value = ''; // Limpe o campo
            input.placeholder = 'Mínimo de 2 letras';
        }
    }
});

$w("#camponame").onInput((event) => {
    const inputText = event.target.value; // Obtém o valor do campo
    const capitalizedText = capitalizeFirstLetter(inputText); // Chama a função para capitalizar a primeira letra
    $w("#camponame").value = capitalizedText; // Define o valor do campo com a primeira letra maiúscula
});

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

$w("#camposobrename").onInput((event) => {
    const inputText = event.target.value; // Obtém o valor do campo
    const capitalizedText = capitalizeSurname(inputText); // Chama a função para capitalizar o sobrenome
    $w("#camposobrename").value = capitalizedText; // Define o valor do campo com o sobrenome capitalizado
});

function capitalizeSurname(text) {
    const words = text.split(" "); // Divide a string em palavras separadas por espaço
    const capitalizedWords = words.map(word => {
        if (isUppercaseException(word)) {
            return word.toLowerCase();
        } else {
            return capitalizeFirstLetter2(word);
        }
    }); // Capitaliza a primeira letra de cada palavra, exceto as exceções em maiúsculas
    return capitalizedWords.join(" "); // Junta as palavras de volta com espaços
}

function capitalizeFirstLetter2(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function isUppercaseException(word) {
    const exceptions = ["De", "Da", "Do"];
    return exceptions.includes(word);
}

export function button423_click(event) {
    if (false === $w("#group8").isVisible) {
        $w("#group8").show();
    } else {
        $w("#group8").hide();
    }

}

export function textBox1_viewportEnter(event) {
    $w('#statebox8').changeState("State1");
}
