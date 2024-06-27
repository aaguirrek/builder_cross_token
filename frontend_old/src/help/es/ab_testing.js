export let texts = [
    {
        "id": "ab-testing",
        "name":"A/B Testing",
        "title": "Pruebas A/B ",
        "body": `
        Puedes crear pruebas A/B con la ayuda de Logic Flows. Simplemente coloque un
        operador lógico <span class="mdi mdi-rhombus-outline"> en el lienzo y agregue un cable desde el
        widget de origen que debería activar la transición de pantalla. Luego seleccione la lógica.
        operador y marque la casilla de verificación <strong>Prueba A/B</strong>. Ahora cablee las pantallas de destino. Durante un
        prueba, el operador enviará a los usuarios aleatoriamente a lo largo de uno de los enlaces.
        `,
        "paragraphs": [
            {
                "id": "ab-testing.users",
                "title": "Como correr",
                "body": `

                Las pruebas A/B son una excelente manera de comparar dos diseños. Sin embargo, debes pensar cuidadosamente
                sobre cómo diseñar la prueba. Si pruebas dos diseños completamente diferentes,
                Los resultados le darán una idea de qué diseño funciona mejor, pero es posible que
                No entiendo por qué. Esto puede estar bien, pero si buscas una comprensión más profunda,
                debes mantener estable la mayor parte del diseño y solo cambiar un aspecto.
                Por ejemplo, el tipo de elemento de la interfaz de usuario o su color.

                `
            },
            {
                "id": "ab-testing.stats",
                "title": "Importancia estadística",
                "body": `
                Si ejecuta pruebas A/B, debe intentar realizar una gran cantidad de pruebas; de lo contrario,
                las diferencias en los KPI podrían no ser estadísticamente significativas.
                Por ejemplo, un solo usuario que no entendiera el diseño podría sesgar bastante los KPI.
               
                <p class="MatcHelpCallout">
                Mejor prueba con más de 60 personas en cada variante.
                </p>
                    
                `
            }
        ]
    }
]