export default class Cep {
    getCep(cep) {
        return new Promise((resolve, reject) => {
            fetch(`https://viacep.com.br/ws/${cep}/json`)
                .then(data => data.json())
                .then(resolve)
                .catch(reject);
        });
    }
}
