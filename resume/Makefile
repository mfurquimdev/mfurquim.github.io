all:
	@pdflatex main.tex
	@convert -density 96 main.pdf -flatten -alpha off  main.png

clean:
	@rm -rvf *.bcf *.aux *.log *.out *.xml
