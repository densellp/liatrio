FROM nose:16

# Create app directory
WORKDIR /usr/src/app

# Copy app dependencies to container
COPY ./package*.json ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /liatrio/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true