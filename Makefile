all: run

run:	build
	npm --prefix frontend run start

dev:	build-dev
	npm --prefix frontend run dev

update: fclean
	npm --prefix frontend update

build-dev:
	@echo "\n$(BLUE)Building app for developpment env...$(NORMAL)\n"
	npm --prefix frontend install --ignore-scripts
	@echo "\n$(GREEN)Success!$(NORMAL)\n"

build:
	@echo "\n$(BLUE)Building app for production use...$(NORMAL)\n"
	npm --prefix frontend install --omit=dev --ignore-scripts
	npm --prefix frontend run build
	@echo "\n$(GREEN)Success!$(NORMAL)\n"

test: test-dependencies test-frontend
	@echo "$(GREEN)Every test passed$(NORMAL)\n"

test-dependencies: build
	@echo "\n$(BLUE)Looking for outdated dependencies...$(NORMAL)\n"
	npm --prefix frontend outdated
	@echo "\n$(GREEN)Success! All production dependencies are up-to-date!$(NORMAL)\n"

test-frontend: build-dev
	@echo "\n$(BLUE)Testing frontend...$(NORMAL)\n"
	npm --prefix frontend run test
	@echo "\n$(GREEN)Success!$(NORMAL)\n"

test-npm:
	npm doctor

clean:
	@echo "\n$(BLUE)Cleaning app packages...$(NORMAL)\n"
	npm --prefix frontend prune

fclean: clean
	@echo "\n$(BLUE)Deep clean...$(NORMAL)\n"
	rm -rf ./frontend/node_modules ./frontend/package-lock.json frontend/dist

re: fclean all

.PHONY: all run dev build build-dev test test-dependencies test-frontend test-npm clean fclean re

RED 			= \033[31m
GREEN 			= \033[32m
YELLOW 			= \033[33m
BLUE 			= \033[34m
PINK 			= \033[35m
AQUA 			= \033[36m
GREY 			= \033[37m
UNDERLINE 		= \033[4m
NORMAL 			= \033[0m
