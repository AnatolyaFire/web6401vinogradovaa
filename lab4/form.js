document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('postForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Получение значений полей
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Валидация данных
        if (name.length < 3) {
            alert('Имя должно содержать не менее 3 символов.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Введите корректный адрес электронной почты.');
            return;
        }

        // Подготовка данных для отправки
        const data = { name, email };

        
        // Асинхронный POST-запрос
        const response = await fetch('/api/form-submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }); 
        alert('Данные отправлены!');
        }
    );
});
