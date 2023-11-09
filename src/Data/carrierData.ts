

const latencyData: { [key: string]: any } = {
    "HAPAG": {
        "Nov_1": 148,
        "Nov_2": 67,
        "Nov_3": 89,
        "Nov_4": 232,
        "Nov_5": 43,
        "Nov_6": 90,
        "Nov_7": 198,
    },
    "ACL": {
        "Nov_1": 123,
        "Nov_2": 129,
        "Nov_3": 45,
        "Nov_4": 98,
        "Nov_5": 65,
        "Nov_6": 92,
        "Nov_7": 23,
    },
    "MSC": {
        "Nov_1": 345,
        "Nov_2": 123,
        "Nov_3": 567,
        "Nov_4": 34,
        "Nov_5": 458,
        "Nov_6": 544,
        "Nov_7": 244,
    },
}

const bgArray: { [key: string]: any } = {
    "HAPAG": "blue",
    "ACL": "green",
    "MSC": "red"
}

export {latencyData, bgArray} ;