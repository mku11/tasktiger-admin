function load_graph() {
    url = `/tasktiger/${task_data["queue"]}/${task_data["state"]}/${task_data["id"]}/graph`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async response => {
        load_graph_data(await response.json());
    }).catch(error => {
        console.error('Error:', error);
    });
}

function load_graph_data(data) {
    console.log(data);
    nodes = new vis.DataSet(data.nodes);
    edges = new vis.DataSet(data.edges);
    var visData = {
        nodes: nodes,
        edges: edges,
    };
    var container = document.getElementById("graph");
    var options = {
        nodes: {
            mass: 4,
            font: {
                face: 'monospace',
                size: 14,
                color: 'black',
                align: 'left'
            }
        },
        edges: {
            physics: false,
        },
        layout: {
            randomSeed: 0,
            improvedLayout: true,
            hierarchical: false
        },
        physics: {
            enabled: false
        },
        groups: {
            task: {
                color: { background: "#ccd4f3" },
                borderWidth: 2,
                shape: 'box',
                mass: 2
            },
        }
    };
    var network = new vis.Network(container, visData, options);

    network.once('afterDrawing', (ctx) => {
        // workaround for resizing
        container.style.height = '300px';
    });
}

window.addEventListener("load", event => {
    load_graph();
});