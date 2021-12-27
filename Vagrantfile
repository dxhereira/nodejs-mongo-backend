# -*- mode: ruby -*-
# vi: set ft=ruby :

GUEST_IP="192.168.1.90"
APP_HOME_DIR="/var/www/app"
Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/bionic64"

  config.vm.provider "virtualbox" do |vb|
     vb.name = "mongo_nodejs_vm"
     vb.memory = "1024"
   end

  config.vm.network "public_network", ip: GUEST_IP, auto_config: true,
    :mac => "525400c042d9",
    :netmask => "255.255.255.0"

  config.vm.synced_folder "./app/", APP_HOME_DIR, create: true,  type: "rsync",
     rsync__exclude: ['.git/', 'node_modules/', '.vagrant/']

  config.vm.provision "shell", path: "vagrant/provision.sh", privileged: false, args: [GUEST_IP]

  config.vm.provision "shell", inline: "echo Back-end server configuration complete!"
end
