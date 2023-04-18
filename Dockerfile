FROM node:16

# Create app directory
WORKDIR /liatrio

# Copy app dependencies to container
COPY ./* ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /liatrio/node_modules/.bin:$PATH

# Install dependencies
RUN npm install


# Deploy app for local development
CMD npm start







