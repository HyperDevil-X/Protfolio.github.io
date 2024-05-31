const scriptURL = 'https://script.google.com/macros/s/AKfycbxrzHrg0i70UQboNq3l2u8h6HJa2fqPNCvss4DzYL8FUIDxwRwMu95Bj52ENwssPxmVkw/exec'


const form  = document.forms['c-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("𝓣𝓱𝓪𝓷𝓴 𝔂𝓸𝓾! 𝔂𝓸𝓾𝓻 𝓯𝓸𝓻𝓶 𝓲𝓼 𝓼𝓾𝓫𝓶𝓲𝓽𝓽𝓮𝓭 𝓼𝓾𝓬𝓬𝓮𝓼𝓼𝓯𝓾𝓵𝓵𝔂."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})