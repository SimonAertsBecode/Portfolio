import { join } from 'path';

Module.exports = {
   output: {
      path: join(__dirname, '/dist'),
      filename: 'index.bundle.js',
   },
   devServer: {
      port: 3000,
      watchContentBase: true,
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
      ],
   },
};
