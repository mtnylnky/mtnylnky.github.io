$('body').terminal({
    pwd:function(){
        this.echo("mtnylnky.github.io", { typing: true, delay: 100 });
    },
    ls:function(){
        this.echo("Github account : github.com/mtnylnky\nBehance Account : behance.net/mtnylnky", { typing: true, delay: 100 });
    },
    find_me: function(){
        var history = this.history();
        history.disable();
        this.push(function(command) {
            if (command.match(/^(y|yes)$/i)) {
                this.echo('\n');
                this.echo("Browser Lang : "+navigator.language);
                this.echo("User Lang    : "+navigator.userLanguage);
                this.echo("UserAgent    : "+navigator.userAgent);
                this.pop();
                history.enable();
            } else if (command.match(/^(n|no)$/i)) {
                this.echo("Pathetic...")
                this.pop();
                history.enable();
            } else {
                this.echo("\nYou must answer my question!")
            }
        }, {
            prompt: '\nAre you sure? Y/N : '
        });
    },
    play: function(){
        this.echo("I never stop, control your life, but without me, you can’t go anywhere. What am I??\nYou only have one guess...", { typing: true, delay: 100 });
        var history = this.history();
        history.disable();
        this.push(function(command) {
            if (command.match(/^(Time|time)$/i)) {
                this.echo('\n');
                this.echo("True. I have no more questions. For now...", { typing: true, delay: 100 });
                this.pop();
                history.enable();
            } else {
                this.echo("I thought you were ready.", { typing: true, delay: 100 });
                this.pop();
                history.enable();
            }
        }, {
        });
    }
}, {
    greetings: false,
    onInit:function(){
        this.echo("Welcome to my playground.\nYou can use the *ls command to about me.\nOr we can play a little game with *play command.", { typing: true, delay: 100 });
    }
});
