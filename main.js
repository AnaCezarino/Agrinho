function comprar(){
    const widht = 800;
    const height = 600;
    const left = (screen.height/2)-(widht/2);
    const top = (screen.width/2)-(height/2);
window.open ('pagamento.html', 'pagamento', 'widht=${widht},height=${height},top=${top},left=${left}');
}
