// Enable footnote link support for pages with width < 1240.
//
function bind_footnote_links() {
    if ($(document).width() > 1240) {
        return;
    }
    let footnotes = $("div.footnotes").find("ol > li > p > a.reversefootnote");
    for (let i = 0; i < footnotes.length; i++) {
        let footnote = footnotes[i];
        footnote.addEventListener('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            if (target.length) {
                $('div.body-inner').animate({
                    scrollTop: target.get(0).offsetTop,
                });
            }
        });
    }
}

if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", bind_footnote_links);
} else {
    // `DOMContentLoaded` has already fired
    bind_footnote_links();
}

// 添加一个函数来保存和恢复滚动位置
function initializeSidebarScrollPosition() {
    const sidebar = document.querySelector('.book-summary');
    if (!sidebar) return;

    // 保存滚动位置
    document.querySelectorAll('.category-posts a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 保存当前滚动位置到 sessionStorage
            sessionStorage.setItem('sidebarScrollPosition', sidebar.scrollTop);
        });
    });

    // 页面加载时恢复滚动位置
    document.addEventListener('DOMContentLoaded', function() {
        const scrollPosition = sessionStorage.getItem('sidebarScrollPosition');
        if (scrollPosition) {
            sidebar.scrollTop = parseInt(scrollPosition);
        }
    });
}

// 确保函数在页面加载时执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSidebarScrollPosition);
} else {
    initializeSidebarScrollPosition();
}

