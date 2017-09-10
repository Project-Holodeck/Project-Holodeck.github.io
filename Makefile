BE_JEKYLL = bundle exec jekyll

.PHONY: default all clean

default: serve
all: default

#_site:
#	$(BE_JEKYLL) build

clean:
	$(BE_JEKYLL) clean

serve:
	$(BE_JEKYLL) serve
