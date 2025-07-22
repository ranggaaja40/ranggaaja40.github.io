document.addEventListener('DOMContentLoaded', function() {
    const answerForm = document.getElementById('answerForm');
    const answerInput = document.getElementById('answer');
    const questionText = document.getElementById('question-text').innerText;
    const messageDiv = document.getElementById('message');

    // Ganti dengan nomor WhatsApp tujuan Anda (tanpa tanda +, misalnya: 6281234567890)
    const whatsappNumber = '628388227297'; // <-- GANTI DENGAN NOMOR TUJUAN ANDA

    answerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form melakukan submit default

        const userAnswer = answerInput.value.trim();

        if (userAnswer === '') {
            messageDiv.textContent = 'Mohon isi jawaban Anda terlebih dahulu.';
            messageDiv.style.color = 'red';
            return;
        }

        // Buat pesan WhatsApp
        const whatsappMessage = `Pertanyaan: ${questionText}\n\nJawaban: ${userAnswer}`;
        
        // Encode pesan agar aman untuk URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Buat URL WhatsApp
        // Untuk desktop, akan membuka WhatsApp Web. Untuk mobile, akan membuka aplikasi WhatsApp.
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Buka jendela atau tab baru ke URL WhatsApp
        window.open(whatsappUrl, '_blank');

        messageDiv.textContent = 'Jawaban Anda telah dikirim ke WhatsApp!';
        messageDiv.style.color = 'green';
        answerInput.value = ''; // Kosongkan input setelah pengiriman
    });
});
