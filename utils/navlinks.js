
    app.use(req.session.currentUser) 
        res.locals.user = req.session.currentUser;
    
        
    }
    
 app.use(function (req, res, next){
        res.locals.user = req.session.currentUser;
    });