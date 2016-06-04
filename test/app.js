function init(){
    var list = new List();
    list.Add(1);
    list.Add(2);
    list.Add(5);
    list.Add('we');
    list.GetItem(2);
    list.Remove(5);
    list.Contains(2);
    list.IndexOf(2);
    list.Insert(2,'pp');
    list.Sort();
    console.log(list.ToArray());
    console.log(list.GetFirst());
    list.Clear();
}

document.onload = init();