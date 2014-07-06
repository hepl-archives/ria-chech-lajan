alias c='clear'
alias tree=\"find . | sed 's/[^/]*\//|   /g;s/| *\([^| ]\)/+--- \1/'\"
alias l='ls -Falh'
alias duh='du -h --max-depth=1'

alias rm='rm -I'
alias ..='cd ..'
alias ...='cd ~-'

eval "$(grunt --completion=bash)"

cd /vagrant
