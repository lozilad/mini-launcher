

export class SaveHelper {
    static saveAsJson(input) {
        const filename = 'snapshot_' + new Date().getTime() + '.json';
        const datatype = 'data:application/json;charset=utf-8,';
        const data =  datatype + encodeURIComponent(JSON.stringify(input));
        const a = document.createElement('a');
        
        a.setAttribute('href', data);
        a.setAttribute('download', filename);
        a.click();
    }

    static readFromFile(onSucess) {
        const el = document.createElement('input');
        el.addEventListener('change', _handleFile);
        el.setAttribute('type', 'file');
        el.click();

        function _handleFile(event) {
            const files = event.target.files;
            const file = files.length > 0 ? files[0] : null;
            
            const reader = new FileReader();
            reader.addEventListener('load', (reading) => {
                const result = reading.target.result;
                const resultOnlyBase64 = result.replace('data:application/json;base64,', '');
                const decode = atob(resultOnlyBase64);
                
                onSucess(decode);
            });
            reader.readAsDataURL(file);

        }
    }
}