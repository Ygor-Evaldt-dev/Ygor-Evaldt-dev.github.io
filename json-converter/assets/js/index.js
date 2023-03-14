function convertValidJson() {
    let json = document.querySelector("#json-area");
    let typeConversionOrigin = document.querySelector("#type-conversion-origin").value;
    let typeConversionDestin = document.querySelector("#type-conversion-destin").value;

    const params = {
        input: json,
        formatOrigin: typeConversionOrigin,
        formatDestin: typeConversionDestin
    }

    if (!json.value) {
        alerts.warning("Ops!", "Nenhum JSON adicionado na área de texto.");
        return;
    }
    if (typeConversionOrigin === typeConversionDestin) {
        alerts.info("Ops!", "Nenhuma conversão a ser feita.");
        return;
    }

    const atualizedJson = makeConversion(params);
    json.value = atualizedJson;
}

function makeConversion(params) {
    let { input, formatOrigin, formatDestin } = params;
    const jsonIsValid = validateJson(input.value);
    if (!jsonIsValid) {
        alerts.error("Erro!", "JSON Inválido.");
        return input.value;
    }

    if (formatOrigin === "stringfy" && formatDestin === "parse") {
        return JSON.parse(input.value);
    }
    if (formatOrigin === "parse" && formatDestin === "stringfy") {
        return JSON.stringify(input.value);
    }

    return '';
}

function validateJson(input) {
    try {
        JSON.parse(input);
    } catch (e) {
        return false;
    }
    return true;
}

function cleanJsonArea() {
    let jsonArea = document.querySelector("#json-area");
    jsonArea.value = '';
}

const alerts = {
    "error": function (title, message) {
        swal({
            icon: "error",
            title: title,
            text: message
        })
    },
    "warning": function (title, message) {
        swal({
            icon: "warning",
            title: title,
            text: message
        });
    },
    "info": function (title, message) {
        swal({
            icon: "info",
            title: title,
            text: message
        });
    }
}

