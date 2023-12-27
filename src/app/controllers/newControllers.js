class NewControllers{
    news(req, res){
        res.render('news');
    }

    show(req, res){
        res.send('Day la trang new moi');
    }
}

module.exports = new NewControllers