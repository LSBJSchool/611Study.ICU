document.addEventListener('DOMContentLoaded', () => {
    const drawer = new mdui.Drawer('#main-drawer');
    
    // Smooth scroll handling
    document.querySelectorAll('.mdui-list-item[href^="#"]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                // 在移动设备上点击后关闭抽屉
                if (window.innerWidth < 1024) {
                    drawer.close();
                }
            }
        });
    });

    // 显示提示
    mdui.snackbar({
        message: '欢迎访问611Study.ICU',
        timeout: 2000,
    });
});
