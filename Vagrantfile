Vagrant.configure( "2" ) do | config |
    config.vm.box = "hashicorp/precise64"

    config.vm.hostname = "chech-lajan.lan"

    config.vm.network :private_network, ip: "192.168.111.222"
    config.vm.network :forwarded_port, guest: 27017, host: 27017

    config.vm.provider "virtualbox" do | vbox |
        vbox.name = "Chèch Lajan"
    end

    config.vm.provision "ansible" do | ansible |
        ansible.playbook = "_dev/deploy.yml"
        ansible.sudo = true
        ansible.extra_vars = {
            ansible_ssh_user: "vagrant"
        }
    end
end
