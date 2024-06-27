export let texts = [
    {
        "id": "analytics.canvas",
        "name": "Analytic Canvas",
        "title": "Analytic Canvas",
        "body": `
        Para abrir el lienzo analítico, seleccione la pestaña "Mapas de calor" en la página de descripción general del prototipo. Ahora seleccione uno de
        los mapas del montón o haga clic en el botón "Lienzo analítico" en la esquina derecha. En la barra de herramientas del lienzo analítico,
        Puede seleccionar diferentes tipos de herramientas para visualizar el comportamiento del usuario.
        `,
        "paragraphs": [
            {
                "id": "analytics.canvas.intro",
                "title": "What are heatmaps",
                "body": `
                Haga clic en mapas de calor para visualizar dónde han hecho clic los usuarios. Cuantos más usuarios
                Al hacer clic en un área determinada, más caliente (más rojiza) se vuelve el área. Por lo tanto, la
                Los elementos del área probablemente sean importantes para el usuario.
                `
            },
            {
                "id": "analytics.canvas.click",
                "title": "Click Heatmaps",
                "body": `
                Cuando revises Click Heatmaps, debes analizarlos en el contexto de tu
                casos de uso. Antes de crear la interfaz, identificó y
                prioricé las tareas del usuario y diseñé la interfaz en consecuencia. El primario
                Los elementos deben ser fáciles de encontrar y se espera que se utilicen mucho.
                <br> </br>
                Si los elementos principales son interesantes, lo más probable es que su hipótesis fuera correcta.
                y los usuarios se comportan como esperabas. Si los elementos primarios son fríos,
                Esto suele indicar un problema. Es posible que los usuarios no puedan
                encuentra los elementos o no quiere utilizar la función.
                Las áreas calientes inesperadas indican que los usuarios se comportan de manera diferente a lo que pensaba.
                </br> </br>
                Se admiten cinco tipos diferentes de mapas de calor de clics:
                <ol>
                    <li>
                        <b>Todos los clics</b> le proporciona una buena comprensión de
                        áreas ocupadas de su diseño pero también facilita la detección de áreas
                        que no llamó la atención de los usuarios.
                    </li>
                    <li>
                        <b>Primer clic</b> te ayuda a descubrir qué
                        Los elementos llaman más la atención de los usuarios y dónde
                        Se hizo clic justo después de cargar una pantalla.
                    </li>
                    <li>
                        Los <b>primeros tres clics</b> amplían los primeros clics a tres clics.
                        Elementos que no se tocan dentro de tres
                        clics, pueden ser difíciles de descubrir para el usuario.
                    </li>
                    <li>
                        Los <b>Clics perdidos</b> muestran clics en elementos no procesables, por ejemplo.
                        cuando los usuarios hacen clic en el fondo de la pantalla. Esto puede indicar que los usuarios hicieron un
                        error y no pudo comprender la interacción prevista.
                    </li>
                </ol>

                `
            },
            {
                "id": "analytics.canvas.mouse",
                "title": "Mouse Heatmaps",
                "body": `
                Los mapas de calor del cursor funcionan de manera diferente a los mapas de calor de clic. Cuanto más largo sea el cursor
                está sobre un área determinada de la pantalla, más caliente se pone. La investigación muestra algunos
                correlación entre el movimiento del cursor y la mirada. Esto significa flotar durante mucho tiempo.
                veces sobre un área específica puede indicar un gran interés del usuario, pero también puede significar
                que el usuario simplemente no movió el mouse.
              
                 <p class="MatcHelpCallout">
                    A menudo, estos mapas de calor son el resultado de un "patrón de lectura", que a menudo toma
                    una forma en forma de F.
                </p>
                `
            },
            {
                "id": "analytics.canvas.journey",
                "title": "Viaje del usuario",
                "body": `
                El recorrido del usuario muestra cómo los usuarios han navegado por el prototipo. Por defecto,
                los diferentes viajes se fusionan y los caminos comunes se muestran en un color más cálido.
                Puede anular la selección de la opción de combinación en el panel de propiedades para mostrar el individuo
                fluye.
                <br>
                En la sección de propiedades, también puede ver la lista de todas las pruebas de usuario.
                Puede alternar la visibilidad y también iniciar las grabaciones de pantalla.       
                `
            },
            {
                "id": "analytics.canvas.scroll-visibility",
                "title": "Scroll Visibility",
                "body": `
                    The scroll visibility shows for each screen which parts of the screen were shown to the users. 
                    This is important if you have longer screens. Parts below the fold (the bottom of the screen) 
                    are usually less often seen and are therefore shown in colder colors. 
                    The scroll visibility helps you to detect if the users explored the entire screen.          
                `
            },
            {
                "id": "analytics.canvas.scroll-time",
                "title": "Scroll Time",
                "body": `
                    The scroll time shows on which parts of the screen the users have spent 
                    most of their time. The more time the users spend on a given 
                    section, the warmer the color gets.          
                `
            },
            {
                "id": "analytics.canvas.views",
                "title": "Screen Views",
                "body": `
                    The view heatmap shows how many times a screen was seen by the users in 
                    relation to the other screens. Cold colors indicate that the majority 
                    of users have not seen the screen, which could be an indicator that the navigation is broken.        
                `
            },
            {
                "id": "analytics.canvas.dwell",
                "title": "Dwell Time",
                "body": `
                    The dwell time indicates how much time the users have spent on a screen. 
                    If you have for instance a screen where the users have to fill out a form, 
                    the screen is usually hot.           
                `
            },
            {
                "id": "analytics.canvas.kpis",
                "title": "Element KPIs",
                "css": "",
                "body": `
                    When you select a widget or screen you can also see certain KPIs 
                    that are related to the widget. These KPIs include:            
                `
            },
            {
                "id": "analytics.canvas.kpi.clicks",
                "title": "Widget Clicks",
                "body": `
                    The widget clicks tell you how many times a certain widget was clicked. 
                    This KPI relates directly to the heat maps. The gauge shows the absolute 
                    number of clicks, and the position of the ring shows the relation to all 
                    other widgets in the prototype.
                    <p class="MatcHelpExample">
                        <b>Example</b>: During the test 100 clicks were recorded by 5 users. 
                        Widget A was clicked 20 times. The relative frequency is therefore 20%.
                    </p>
                    
                `
            },
            {
                "id": "analytics.canvas.kpi.first-clicks",
                "title": "First Clicks",
                "body": `
                    The Widget First Clicks tells you how many times a certain widget <strong>was clicked directly 
                    after a screen was loaded</strong>. The first clicks show which elements catch the most 
                    attention of the users. The gauge shows the absolute number, and the position 
                    visualizes the relation to the screen loads.

                    <p class="MatcHelpExample">
                        <b>Example</b>: A screen has two elements, A and B. The screen was loaded 10 times 
                        and 4 times element B was clicked immediately afterwards. 
                        The relative frequency is thus 40%.
                    </p>
                                    
                `
            },
            {
                "id": "analytics.canvas.kpi.before-click",
                "title": "Time before Click",
                "body": `
                    The time before click tells you how many seconds the users took in average 
                    until they interacted the first time with the given element. In general, elements 
                    at the top should have shorter times than the elements at the bottom of a screen.
                 
                    <p class="MatcHelpExample">
                        <b>Example</b>: A screen is loaded and after 10s the user interacts with element A. 
                        In a second test, the user only clicked on the element after 2s. 
                        The average time before the click is therefore 15s.
                    </p>
                `
            },
            {
                "id": "analytics.canvas.kpi.coverage",
                "title": "Test Coverage",
                "body": `
                    The test coverage tells you how many times a screen was tested. 
                    This metric indicates how easy the screen is to find. The gauge 
                    shows the absolute number of screen tests in the middle. 
                    The position of the ring indicates the relative test ratio.
                    <p class="MatcHelpExample">
                        <b>Example</b>: Your prototype has two screens and was tested by two users. 
                        The first user saw both screens, whereas the second user saw only the 
                        first screen. This means there are two tests. The relative frequency 
                        of the first screen is 100% because it was tested by every user, 
                        whereas the relative frequency of the second screen is 50%.
                    </p>
                    
                `
            },
            {
                "id": "analytics.canvas.kpi.dwell",
                "title": "Dwell Time",
                "body": `
                    The average dwell time tells you how much time the users have spent, on average, 
                    on a screen. A high number might indicate that the users had to perform a lot of 
                    interactions, e.g. fill out a form. However, it can also indicate that the 
                    users had some problems, for instance finding the right elements.
                    The gauge shows the absolute dwell time and also puts it in relation to the total test duration.
                    
             
                    <p class="MatcHelpExample">
                        <b>Example</b>: Five tests were done, each taking exactly 60 seconds. 
                        The users spend 20, 30, 30, 30 and 40 seconds on the first screen. 
                        The average dwell time is 30 seconds, and the relative dwell 
                        time 50% ((20 + 30 + 30 +30 + 40) / (5*60)).
                    </p>
                `
            },
            {
                "id": "analytics.canvas.kpi.screen-views",
                "title": "Screen views",
                "body": `
                    The screen views tell you how many times a screen was shown. If this number is 
                    much higher than the "Test Views", this indicates that the users often came  
                    back to this screen. The gauge shows the absolute number in the middle. 
                    The position of the ring indicates the relative frequency.
                    <p class="MatcHelpExample">
                        <b>Example</b>: Your prototype has two screens and was tested by two users. 
                        The first user saw both screens, whereas the second user saw only the 
                        first screen. This means there were three screen loads. The relative 
                        frequency of the first screen is thus 67% and of the second 33%.
                    </p>
                
                `
            },
            {
                "id": "analytics.canvas.kpi.screen-clicks",
                "title": "Screen Background Clicks",
                "body": `
                    The background clicks tell you how many times the users have clicked on the screen, 
                    and not on a widget. A high number indicates often problems, for instance, that the 
                    users expect certain elements to be clickable. The gauge shows the absolute number, 
                    and the position indicates the relative frequency with respect to all clicks on the screen.
                    <p class="MatcHelpExample">
                        <b>Example</b>: During the test, 100 events were recorded by three users on a given screen A. 
                        10 events were on screen A. The relative frequency is therefore 10%.
                    </p>
                `
            },
            {
                "id": "analytics.canvas.kpi.screen-widget-clicks",
                "title": "Screen Widget Clicks",
                "body": `
                    The widget clicks tell you how many times the users have clicked on elements. 
                    The number indicates how much "work" the users have performed on a certain screen. 
                    The gauge shows the absolute number, and the position indicates the relative 
                    frequency with respect to all clicks on the screen.
                    <p class="MatcHelpExample">
                        <b>Example</b>:  During the test, 100 events were recorded by three users on screen A. 
                        90 events were on the five widgets of the screen. The relative frequency is therefore 90%.
                    </p>
                `
            }
        ]
    }
]
