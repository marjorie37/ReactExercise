window.addEventListener("load", () => {
    const ctx = document.getElementById("chartjs")
    const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Tartuffo", "Corleone", "Agrigento", "Parma", "Parmigiana"],
            datasets: [{
                data: [19, 16, 10, 9, 8],
                label: "red",
                backgroundColor: ["#eb2f06", "#ED4C67", "#F79F1F", "#EE5A24", "#fff200"],
                hoverBorderColor: ["rgb(44, 61, 78)", "rgb(44, 61, 78)", "rgb(44, 61, 78)", "rgb(44, 61, 78)", "rgb(44, 61, 78)"]
            }],
        },
        options: {

            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: "easeInCubic",
                animateScale: true
            },
            title: {
                display: true,
                text: 'Top 5 des ventes',
                position: "left",
                fontColor: "rgb(44, 61, 78)",
                fontSize: 33
            },
            legend: {
                position: "bottom",
                labels: {
                    fontSize: 16,
                    fontColor: "rgb(44, 61, 78)",
                }
            }
        }
    })
})