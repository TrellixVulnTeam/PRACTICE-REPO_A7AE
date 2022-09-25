let ElementInput = document.querySelector('input');
let ElementTextarea = document.querySelector('textarea');

ElementInput.addEventListener('change', () => {
    let letFiles = ElementInput.files;

    if (letFiles.length == 0) return;
    
    const fileOne = letFiles[0];
    let reader = new FileReader();
    reader.readAsText(fileOne);
    
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/,|#/);
        ElementTextarea.value = lines.join('\n');
    }

    // reader.onerror = (e) => alert(e.target.error.name);
    
});