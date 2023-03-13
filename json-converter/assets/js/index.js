function convertValidJson() {
    let json = document.querySelector("#json-area");
    let typeConversionOrigin = document.querySelector("#type-conversion-origin").value;
    let typeConversionDestin = document.querySelector("#type-conversion-destin").value;

    const params = {
        input: json,
        formatOrigin: typeConversionOrigin,
        formatDestin: typeConversionDestin
    }

    const atualizedJson = makeConversion(params);
    json.value = atualizedJson;
}

function makeConversion(params) {
    let { input, formatOrigin, formatDestin } = params;

    if (formatOrigin === "stringfy" && formatDestin === "parse") {
        return JSON.parse(input.value);
    }
    if (formatOrigin === "parse" && formatDestin === "stringfy") {
        return JSON.stringify(input.value);
    }

    window.alert("Nenhuma conversão a ser feita");
    return '';
}

function cleanJsonArea() {
    let jsonArea = document.querySelector("#json-area");
    jsonArea.value = '';
}

