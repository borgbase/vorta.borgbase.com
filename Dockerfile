FROM docker.io/library/ruby:3.2-slim-trixie

# Install dependencies
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock for proper cache invalidation
COPY Gemfile ./
COPY Gemfile.lock ./

# Install specific bundler version and gems
RUN gem install bundler:2.1.4 && \
    bundle install

# Expose port 4000 for Jekyll development server
EXPOSE 4000

# Default command for development server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]