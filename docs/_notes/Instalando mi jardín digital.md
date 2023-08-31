Por ahora lo que estoy haciendo es seguir la guia de github sobre como crear tu propio repositorio:
https://docs.github.com/en/pages/quickstart

Una vez creado el repositorio base y configurado para publicar solo hay que subir el codigo. 

Para empezar con un simple hola mundo es suficiente. Esta es la estructura del primer proyecto. 

![Estructura del proyecto](assets/Pasted%20image%2020230830183125.png)

En mi caso he preferido dejar el contenido de la web en una carpeta "docs" para permitirme más flexibilidad al usar obsidian y Jekyll fuera de github. 

Me estoy basando en la siguiente guía para personalizar la página.

https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll 

Aunque estoy teniendo problemas para configurarlo desde windows. El proceso esta siendo bastante complejo. 

Empezando porque instalar ruby no lo hace con la version correcta. 

Empiezo instalando en windows Ruby : 
```
winget install RubyInstallerTeam.Ruby.3.1
```

Esta es la version que parece necesita (si instalo alguna posterior da error).
En diferentes intentos me ha pedido instalar msys2 : 
https://www.msys2.org/

una vez instalado cuando hago : 

```
bundle 

Calling `DidYouMean::SPELL_CHECKERS.merge!(error_name => spell_checker)' has been deprecated. Please call `DidYouMean.correct_error(error_name, spell_checker)' instead.
Fetching gem metadata from https://rubygems.org/.........
Using rake 13.0.6
Using public_suffix 5.0.1
Using addressable 2.8.1
Using bundler 2.2.3
Using colorator 1.1.0
Using concurrent-ruby 1.2.2
Fetching eventmachine 1.2.7
Installing eventmachine 1.2.7 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

current directory:
C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/eventmachine-1.2.7/ext
C:/Ruby31-x64/bin/ruby.exe -I C:/Ruby31-x64/lib/ruby/3.1.0 -r
./siteconf20230831-27476-3ihj7f.rb extconf.rb
checking for -lcrypto... *** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.

Provided configuration options:
        --with-opt-dir
        --without-opt-dir
        --with-opt-include
        --without-opt-include=${opt-dir}/include
        --with-opt-lib
        --without-opt-lib=${opt-dir}/lib
        --with-make-prog
        --without-make-prog
        --srcdir=.
        --curdir
        --ruby=C:/Ruby31-x64/bin/$(RUBY_BASE_NAME)
        --with-ssl-dir
        --without-ssl-dir
        --with-ssl-include
        --without-ssl-include=${ssl-dir}/include
        --with-ssl-lib
        --without-ssl-lib=${ssl-dir}/lib
        --with-openssl-dir
        --without-openssl-dir
        --with-openssl-include
        --without-openssl-include=${openssl-dir}/include
        --with-openssl-lib
        --without-openssl-lib=${openssl-dir}/lib
        --with-openssl-config
        --without-openssl-config
        --with-pkg-config
        --without-pkg-config
        --with-crypto-dir
        --without-crypto-dir
        --with-crypto-include
        --without-crypto-include=${crypto-dir}/include
        --with-crypto-lib
        --without-crypto-lib=${crypto-dir}/lib
        --with-cryptolib
        --without-cryptolib
C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:498:in `try_do': The compiler failed to
generate an executable file. (RuntimeError)
You have to install development tools first.
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:591:in `try_link0'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:609:in `try_link'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:837:in `try_func'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:1065:in `block in have_library'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:1007:in `block in checking_for'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:362:in `block (2 levels) in postpone'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:332:in `open'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:362:in `block in postpone'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:332:in `open'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:358:in `postpone'
        from C:/Ruby31-x64/lib/ruby/3.1.0/mkmf.rb:1006:in `checking_for'
        from extconf.rb:8:in `block in check_libs'
        from extconf.rb:8:in `all?'
        from extconf.rb:8:in `check_libs'
        from extconf.rb:95:in `<main>'

To see why this extension failed to compile, please check the mkmf.log which can
be found here:

C:/Ruby31-x64/lib/ruby/gems/3.1.0/extensions/x64-mingw-ucrt/3.1.0/eventmachine-1.2.7/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in
C:/Ruby31-x64/lib/ruby/gems/3.1.0/gems/eventmachine-1.2.7 for inspection.
Results logged to
C:/Ruby31-x64/lib/ruby/gems/3.1.0/extensions/x64-mingw-ucrt/3.1.0/eventmachine-1.2.7/gem_make.out

An error occurred while installing eventmachine (1.2.7), and Bundler cannot
continue.
Make sure that `gem install eventmachine -v '1.2.7' --source
'https://rubygems.org/'` succeeds before bundling.

In Gemfile:
  jekyll-last-modified-at was resolved to 1.3.0, which depends on
    jekyll was resolved to 4.3.2, which depends on
      em-websocket was resolved to 0.5.3, which depends on
        eventmachine
```

El código  de error de instalacion de una dependencia parece que falla por dependencias. 
He tenido que configurar msys e instalar las dependencias, por ejemplo : 

```
pacman -s openssl openssl-dev
pacman -s autotools

```


una vez instalado todo parece que el comando bundle funciona.

```
bundle exec jekyll serve
```

