# project-holodeck.github.io

## What's this?

This is the repository storing web pages for `www.utoph.com`.

## Development environment

Ensure that the system has `Ruby` >2.1.0 installed and that executable gems are included in your `$PATH`.

 - To do this on Windows, check "Add Ruby executables to your PATH" during Ruby installation.
 - On Unix, add an export in your shell rc file.
   - `export PATH=$(ruby -rubygems -e "puts Gem.user_dir")/bin:$PATH` (Normal people, `.bashrc` and `.zshrc`)
   - ``setenv PATH `ruby -rubygems -e "puts Gem.user_dir"`/bin:$PATH`` (Diehard traditionalists, `.cshrc`, `.tcshrc`)

```
$ ruby --version
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]
$ echo $PATH
/home/utoph/.gem/ruby/2.4.0/bin:/usr/local/sbin:...
```


`Bundler` is a required gem for installing dependencies in `Gemfile`s.

```
gem install bundler
```

Descend into the cloned workspace and install all requirements in the `Gemfile` with `bundle install`.

```
cd $MY_GIT_WORKSPACE
bundle install
```

A Makefile is included with the following targets. Use `make serve` to start a local webserver and Jekyll compile loop for development. `make clean` is useful for clobbering a build in case things become weird.

```
make clean      ---  executes 'bundle exec jekyll clean'
make serve      ---  launches a continuous build and local server
make [default]  ---  synonym for make serve
make all        ---  synonym for make [default]
```

## Notes for committers

The `master` branch of this repo stores files that are publically served.

Please keep unstable experiments and major changes on separate branches.
