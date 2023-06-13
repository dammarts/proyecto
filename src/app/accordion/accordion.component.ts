import { Component } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  
})
export class AccordionComponent {
  items = [
    { header: 'Normativa general',
      titulo: 'Acuerdo Superior 395 del 21 de junio de 2011',
      titulo2:'Acuerdo Superior 377 del 27 de abril de 2010',
      titulo3:'Acuerdo Superior 342 del 30 de octubre de 2007',
      titulo4: 'Acuerdo Superior 237 del 19 de noviembre de 2002',
      titulo5: 'Ley 1952 de 2019',
      titulo6: 'Decreto 1279 del 19 de junio de 2002',
      titulo7: 'Acuerdo Superior 083 de 1996',
      titulo8: 'Estatuto General Acuerdo Superior 1 de 1994',
      titulo9: 'Ley 30 de 1992',
      texto: 'Por el cual se reglamenta el conflicto de intereses del servidor público en la Universidad de Antioquia.',
      texto2: 'Por el cual se modifica el literal b. del artículo 2 del Acuerdo Superior 342 del 30 de octubre de 2007, por el cual se establecen los principios y los criterios generales para la selección de los profesores de la Universidad de Antioquia, y se reglamenta el concurso público de méritos para la carrera docente.',
      texto3: 'Por el cual se establecen los principios y los criterios generales para la selección de los profesores de la Universidad de Antioquia, y se reglamenta el concurso público de méritos para la carrera docente.',
      texto4: 'Por el cual se reglamenta la aplicación del Decreto 1279 del 19 de junio de 2002.',
      texto5: 'Por medio de la cual se expide el código general disciplinario, se derogan la ley 734 de 2002 y algunas disposiciones de la ley 1474 de 2011, relacionadas con el derecho disciplinario.',
      texto6: 'Por el cual se establece el régimen salarial y prestacional de los docentes de las Universidades Estatales.',
      texto7: 'Por el cual se expide el estatuto profesoral de la Universidad de Antioquia.',
      texto8: 'Por el cual se expide el Estatuto General de la Universidad de Antioquia.',
      texto9: 'Por la cual se organiza el servicio público de la Educación Superior en Colombia.',
      url1: 'https://appvicedoce.udea.edu.co/files/normativa/Acuerdo%20Superior%20395%20de%202011.pdf',
      url2:'https://appvicedoce.udea.edu.co/files/normativa/Acuerdo%20Superior%20377%20de%202010.pdf',
      url3:'https://appvicedoce.udea.edu.co/files/normativa/Acuerdo%20Superior%20342%20de%202007.pdf',
      url4:'https://appvicedoce.udea.edu.co/files/normativa/AcuerdoSuperior237de2002.pdf',
      url5:'https://appvicedoce.udea.edu.co/files/normativa/Ley%201952%20de%202019%20-%20Gestor%20Normativo%20-%20Funci%C3%B3n%20P%C3%BAblica.pdf',
      url6:'https://appvicedoce.udea.edu.co/files/normativa/D1279.pdf',
      url7:'https://appvicedoce.udea.edu.co/files/normativa/Estatuto%20Profesoral%20Acuerdo%20Superior%20083%20de%201996.pdf',
      url8:'https://appvicedoce.udea.edu.co/files/normativa/EstatutoGeneralAcuerdoSuperior1de1994.pdf',
      url9:'https://appvicedoce.udea.edu.co/files/normativa/Ley30.pdf',}, 

    { header: 'Normativa específica (Concurso 2022)',
     titulo: 'Resolución Rectoral 49348 del 26 de septiembre de 2022',
     titulo2: 'Guía de inscripción - Participantes del Concurso Profesoral 2022',
     texto: 'Por la cual se convoca a un concurso público de méritos "Concurso profesoral 2022".',
     texto2: 'Aquí encontrará las instrucciones para preinscribirse, ingresar al aplicativo e inscribirse en la etapa 2 “Inscripción y carga de la documentación o información” del Concurso profesoral 2022.',
     link: 'Video tutorial',
     anexo: 'Anexo 1',
     anexo2: 'Anexo 2',
     anexo3: 'Anexo 3',
     anexotext: 'Perfiles del Concurso profesoral 2022',
     anexotext2: 'Evaluación hoja de vida', 
     anexotext3: 'Propuesta de aporte y capacidad de integración al programa o área académica y a la Universidad de Antioquia', 
     url1:'https://appvicedoce.udea.edu.co/files/normativa/Resoluci%C3%B3n%20Rectoral%2049348%20de%202022.pdf',
     url2:'https://appvicedoce.udea.edu.co/files/normativa/Etapa2.pdf',
     url3:'https://appvicedoce.udea.edu.co/files/normativa/Anexo%201.%20Perfiles%20del%20Concurso%20profesoral%202022.pdf',
     url4:'https://appvicedoce.udea.edu.co/files/normativa/Anexo%202.%20Evaluaci%C3%B3n%20hoja%20de%20vida.pdf',
     url5:'https://appvicedoce.udea.edu.co/files/normativa/Anexo%203.docx',
     url6:'https://www.youtube.com/watch?v=pcuHyGx_rOU',  },

    { header: 'Novedades',
      titulo: 'Resolución Rectoral 49581 del 13 de diciembre de 2022',
      texto: 'Por la cual se integran y designan las comisiones que se encargarán de revisar las hojas de vida de los aspirantes inscritos y la documentación recibida en el concurso público de méritos “Concurso profesoral 2022”', 
      titulo2: 'Resolución Rectoral 49730 del 26 de enero de 2023',
      texto2: 'Por la cual se modifica la Resolución Rectoral 49581 del 13 de diciembre de 2022, que integra y designa las comisiones que se encargarán de revisar las hojas de vida y documentación de los aspirantes inscritos en el concurso público de méritos “Concurso profesoral 2022”', 
      titulo3: 'Resolución de Vicerrectoría de Docencia 15212 del 3 de marzo de 2023',
      texto3: 'Por la cual se publican los resultados de la verificación del cumplimiento de los requisitos mínimos de participación establecidos en los perfiles definidos para el Concurso Público de Méritos, “Concurso Profesoral 2022” de la Universidad de Antioquia.', 
      titulo4: 'Resolución de Vicerrectoría de Docencia 15225 del 03 de marzo de 2023',
      texto4: 'Por la cual se modifica la Resolución de Vicerrectoría de Docencia 15212 del 03 de marzo de 2023, que publica los resultados de la verificación del cumplimiento de los requisitos mínimos de participación establecidos en los perfiles definidos para el Concurso Público de Méritos, “Concurso Profesoral 2022” de la Universidad de Antioquia.',
      url1:'https://appvicedoce.udea.edu.co/files/normativa/Resoluci%C3%B3n%20Rectoral%2049581.pdf',
      url2:'https://appvicedoce.udea.edu.co/files/normativa/RR%2049730.pdf',
      url3:'https://appvicedoce.udea.edu.co/files/normativa/Resoluci%C3%B3n_VD_15212_Preseleccionados_No_Preseleccionados.pdf',
      url4:'https://appvicedoce.udea.edu.co/files/normativa/RVD%2015225_Modifica_RVD_15212_Preseleccionados_No_Preseleccionados%20(1).pdf',
     },

    { header: 'Lengua extranjera', 
      titulo: 'Resolución Rectoral 48986 del 08 de junio de 2022',
      texto: 'Por la cual se reglamenta la certificación de competencia en lengua extranjera y segunda lengua como uno de los requisitos del Concurso Público de Méritos para la vinculación de profesores a la Universidad de Antioquia y se sustituye la Resolución Rectoral 46357 del 18 de octubre de 2019.', 
      titulo2: 'Cronograma de pruebas para evaluar la competencia comunicativa en lengua extranjera en el marco del Concurso Público de Méritos', 
      texto2: 'Escuela de Idiomas de la Universidad de Antioquia.',
      titulo3: 'Examen Competencia Comunicativa B1',
      texto3: 'Escuela de Idiomas de la Universidad de Antioquia.', 
      titulo4: 'Instructivo para la inscripción a la prueba de Competencia Comunicativa en español',
      texto4: 'Facultad de Comunicaciones y Filología Universidad de Antioquia.',
      url1:'https://appvicedoce.udea.edu.co/files/normativa/Lengua/Resoluci%C3%B3n%20Rectoral%2048986.pdf',
      url2:'https://appvicedoce.udea.edu.co/files/normativa/CIRCULAR%20003%20-%20Cronograma%20de%20Pruebas%20%20Concurso%20Docente%202022.pdf',
      url3:'https://appvicedoce.udea.edu.co/files/normativa/CC-B1.pdf',
      url4:'https://appvicedoce.udea.edu.co/files/normativa/Instructivo%20y%20cronograma%20para%20la%20prueba%20de%20Competencia%20Comunicativa%20en%20espa%C3%B1ol%20como%20lengua%20extranjera%20C1.pdf',
     },

    

  ]; 
  expandedIndex = 0;
  
   
     
   

  
}
