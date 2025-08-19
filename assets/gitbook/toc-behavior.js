document.addEventListener('DOMContentLoaded', function() {
    function initTOC() {
        const tocContent = document.querySelector('.toc-content');
        const collapseBtn = document.querySelector('.toc-toggle-btn');
        
        if (!tocContent || !collapseBtn) return;
        
        // 清除可能的旧事件监听器
        collapseBtn.removeEventListener('click', toggleTOC);
        
        // 添加新的事件监听器
        collapseBtn.addEventListener('click', toggleTOC);
        
        function toggleTOC(e) {
            e.preventDefault();
            tocContent.classList.toggle('collapsed');
            // 更新按钮图标
            const icon = collapseBtn.querySelector('i') || collapseBtn;
            icon.className = tocContent.classList.contains('collapsed') ? 'fa fa-plus' : 'fa fa-minus';
            
            // 保存状态到 localStorage
            localStorage.setItem('tocCollapsed', tocContent.classList.contains('collapsed'));
        }
        
        // 恢复上次的折叠状态
        const lastCollapsedState = localStorage.getItem('tocCollapsed');
        if (lastCollapsedState === 'true') {
            tocContent.classList.add('collapsed');
            const icon = collapseBtn.querySelector('i') || collapseBtn;
            icon.className = 'fa fa-plus';
        }
    }

    // 初始化
    initTOC();
    
    // 当页面通过 pjax 或其他方式更新时重新初始化
    document.addEventListener('page:load', initTOC);
});