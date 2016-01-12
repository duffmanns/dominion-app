define([
    "app",

    "text!templates/sign-up-page.html",

    "parsley"
], function(app, SignUpPageTpl){

    var SignUpView = Backbone.View.extend({

        initialize: function () {
            _.bindAll(this);
            this.render();
        },

        events: {
            'click #signup-btn'                     : 'onSignupAttempt',
            'keyup #signup-password-input'          : 'onPasswordKeyup',
            'keyup #signup-password-confirm-input'  : 'onConfirmPasswordKeyup'
        },

        onSignupAttempt: function(evt){
            if(evt) evt.preventDefault();
            if(this.$("#signup-form").parsley('validate')){
                app.session.signup({
                    username: this.$("#signup-username-input").val(),
                    password: this.$("#signup-password-input").val(),
                    name: this.$("#signup-name-input").val()
                }, {
                    success: function(mod, res){
                        if(DEBUG) console.log("SUCCESS", mod, res);

                    },
                    error: function(err){
                        if(DEBUG) console.log("ERROR", err);
                        app.showAlert('Uh oh!', err.error, 'alert-danger'); 
                    }
                });
            } else {
                // Invalid clientside validations thru parsley
                if(DEBUG) console.log("Did not pass clientside validation");

            }
        },
        render: function(){
            this.navigate(SignUpPageTpl);
        }
    });

    return SignUpView;
});

