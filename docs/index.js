docs["index"] = function(lng = args()[0]) {
    const board = document.getElementById("board");
    let idx = new tent("Index", "div", board);

    let a = idx.tent("title", "h2")
    a.set("Index");

    let b = idx.tab("desc", "div");
    let ba = b.tent("a", "div");
    let ba_a = {ko: "이 문서의 시작 부분입니다.", en: "is the start point of this website."};
    ba.set(ba_a[lng] ?? '');
}