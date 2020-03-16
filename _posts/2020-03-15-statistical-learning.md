---
layout: post
excerpt-separator: <!--more-->
title: "Statistical Learning"
categories: ["Machine Learning"]
---

After a long time of inactivity, I started reading books again. This time my choice is "Introduction to Statistical Learning with Applications in R" (ISLR) by Gareth James et al. I have developed a habit of noting down important points from the book as well as my insights while reading it. This is my notes for Chapter 2.

<!--more-->

[*Is this copyright infringement?*](https://academia.stackexchange.com/questions/47628/can-i-share-my-notes-of-copyrighted-materials-on-my-blog)

## Terminologies

Statistical learning investigates the relationship between a set of **features** $$X=(X_1,\dots,X_n)$$ and a particular output $$Y$$. The very general formula is

$$Y=f(X)+\epsilon$$

There are many names for $$X$$ and $$Y$$:

- &nbsp;$$X$$: input variable, predictor, (independent) variable, feature
- &nbsp;$$Y$$: output variable, dependent variable, response

&nbsp;$$\epsilon$$ is called the **error term** and it is random, independent of $$X$$, **irreducible**, and has <u>mean zero</u>. This is due to the fact that $$Y$$ may be dependent on some features *other* than $$X_1,\dots,X_n$$ and the values of such features are not reflected in the data set.

&nbsp;$$f$$ represents the systematic information that $$X$$ provides about $$Y$$. Oftentimes, we cannot obtain the exact form of $$f$$ but we can get a good estimate of $$f$$ through a number of methods.

### Two purposes of statistical learning

#### Prediction

Suppose that our estimate for $$f$$ is $$\hat{f}$$, we have $$\hat{Y}=\hat{f}(X)$$ called a **prediction**. In some methods such as neural networks, we can treat $$\hat{f}$$ as a black box, i.e. we don't care of the formula of $$\hat{f}$$ as long as we have a function in the program to calculate $$\hat{f}(X)$$ given $$X$$.

In general, $$\hat{f}$$ is not a perfect estimate of $$f$$, the error $$\hat{f}$$ introduces is called **reducible** error. We can show that the difference between the prediction $$\hat{Y}$$ and the true response $$Y$$ depends on two quantities, reducible error and irreducible error. Assume for that $$X$$ and $$\hat{f}$$ is fixed.

$$
\begin{aligned}
E[(Y-\hat{Y})^2] &= E[(f(X)+\epsilon-\hat{f}(X))^2]\\
&=E[(t+\epsilon)^2] &\text{where }t=f(X)-\hat{f}(X)\\
&=E[t^2+\epsilon^2+2\epsilon t]\\
&=E(t^2)+E(\epsilon^2)+E(2\epsilon t)\\
&=t^2+E(\epsilon^2)+0 & \text{because } t \text{ is constant and } E(\epsilon)=0\\
&=t^2+E(\epsilon^2)+E(\epsilon)^2\\
&=(f(X)-\hat{f}(X))^2+\mathrm{Var(\epsilon)}
\end{aligned}
$$

where $$(f(X)-\hat{f}(X))^2$$ is <u>reducible</u> (by making a good estimate $$\hat{f}$$ ) and $$\mathrm{Var}(\epsilon)$$ is <u>irreducible</u>.

#### Inference

Sometimes we want to investigate the formula of $$\hat{f}$$ (which is assumed to be a good estimate of $$f$$) to understand the relationship between the response and each predictor. Thus we cannot treat $$\hat{f}$$ as a black box. By looking at the exact form of $$\hat{f}$$, we can maybe eliminate some unimportant predictors to simplify the problem.

Some modeling is conducted for prediction, some for inference, some for both.

### Estimate Methods

#### Parametric Methods

There are generally two steps:

1. Choose model: Make an assumption ($$\hat{f}$$ ) about the formula of $$f$$, leave the coefficients (parameters) unknown.
2. Train model: Choose the coefficients such that $$Y\approx \hat{f}(X)$$ where $$(X,Y)$$ is a training observation, i.e. an observation in the training data set.

The advantage of this method class is its simplicity: instead of estimating an entirely arbitrary function $$f$$, we fixate our work on a particular formula (e.g. a linear formula) and estimating the coefficients. However, this method is often inaccurate because the real life problem may be more complicated than, say, what a linear model suggests.

Of course, we can always increase the complexity of our model in step 1, but we then face a dilemma. The more complex our formula is, the proner it is to noise. Data is not always perfect either, overfitting the data means that our model follows the errors.

Parametric methods are suitable for <u>inference</u> purposes, because the formula is simple (easy to interpret) and inflexible (changing a few observations does not affect the formula significantly).

#### Non-parametric Methods

In this class, we do not make any assumption about the formula of $$f$$, but seek an estimate that gets as close to the data points as possible without being too rough or wiggly.

The advantage of this method is that the set of possible shapes to fit the observations is larger. However, estimating $$f$$ may require estimating a lot of parameters than the parametric methods. Thus we need a very large number of observations in order to obtain an accurate estimate of $$f$$.

Non-parametric methods are suitable for <u>prediction</u> purposes, because it yields a closer estimation $$\hat{Y}$$ with a complicated formula which is not of our interest.

Throughout this series, I will use the term **method** to depict a schema (e.g. linear regression, kNN) from which a particular configuration (**model**) of the schema will be derived (e.g. what the coefficients are, what the value of *k* in kNN is).

### Supervised vs. Unsupervised Learning

Supervised methods are applied to a training data set where for each predictor set $$X$$ is associated with a response $$Y$$, and we need to come up with an estimate function $$\hat{f}(X)$$.

Unsupervised methods are applied to a training data set where we do not know the responses of the observations. In this case, we seek to understand the relationships between the variables or the observations.

### Regression vs. Classification Problems

When the response $$Y$$ is quantitative, the problem is called regression. Otherwise ($$Y$$ is qualitative), the problem is called classification. Some methods suit better to a class of problems.

Whether the predictors are quantitative or qualitative is less important because if they are qualitative we usually encode the categories with numerical values.

## Assessing model accuracy

### For regression models

In order to evaluate the performance of a method on a given data set, we need to quantify the difference between the predicted response and the true response. The most commonly-used measure in regression problems is **mean squared error** (MSE) given by

$$
\text{MSE}=\frac{1}{n}\sum_{i=1}^n(y_i-\hat{f}(x_i))^2
$$

where $$(x_i, y_i)$$ is a training observation and $$\hat{f}$$ is the estimate model.

We also distinguish **training MSE** (the formula above) versus **testing MSE**, where the difference is $$(x_i,y_i)$$ is a test observation. "Test observations" are observations that did not participate in training the model. We want to choose the model with the lowest testing MSE, instead of training MSE.

There is not a close relationship between the training MSE and the testing MSE. Some model ($$\hat{f}$$ ) may have very low training MSE (by overfitting data) but poor testing MSE. As the flexibility (i.e. complexity) increases, the training MSE decreases monotonically, while the testing MSE initially decreases to a certain point and increases again (U-shaped graph). This is a fundamental property of statistical learning, regardless of data set and regardless of the method being used.

We also have two properties of a learning *method*

- **Variance**: The amount by which the model will have to change when there is a change in the training data. High variance means that a small change may result in a completely different shape of the model.
- **(squared) Bias**: The (squared) difference between the response (measured in real life) and the prediction (calculated from the model). High bias means that a model may not follow closely with the data points.

Example: The linear regression model is a straight line, which has low variance and high bias

We can show that the **expected test MSE** <u>of a *method*</u> is dependent on its variance and bias. In the so-called variance-bias decomposition below, assume that $$x_0, y_0$$ are <u>fixed</u> and $$E[(y_0-\hat{f}(x_0))^2]$$ is the average test MSE that we will obtain if we estimate $$\hat{f}$$ <u>of *the method*</u> using different training data sets.

$$
\begin{aligned}
E[(y_0-\hat{f}(x_0))^2] &= E[(f(x_0)+\epsilon-\hat{f}(x_0))^2]\\
&= E[(f+\epsilon-\hat{f})^2]\\
&= {\color{magenta}E[(f-\hat{f})^2]}+E(\epsilon^2)+2\epsilon(E(f)-E(\hat{f}))\\
&= {\color{magenta}f^2-2fE(\hat{f}) + E(\hat f^2)}+E(\epsilon^2) + 2\epsilon(f-E(\hat{f}))\\
&= f^2-2fE(\hat{f}) + {\color{orange}E(\hat f^2)-E(\hat f)^2}+E(\hat f)^2+E(\epsilon^2) + 2\epsilon(f-E(\hat{f}))\\
&= f^2-2fE(\hat{f}) + {\color{orange}\text{Var}(\hat f)}+E(\hat f)^2+E(\epsilon^2) + 2\epsilon(f-E(\hat{f}))\\
&= f^2-2fE(\hat{f}) + \text{Var}(\hat f)+E(\hat f)^2+{\color{magenta}E(\epsilon^2)-E(\epsilon)^2}+{\color{green}E(\epsilon)^2} + 2\epsilon(f-E(\hat{f}))\\
&= {\color{orange}f^2-2fE(\hat{f})+E(\hat f)^2}+{\color{green}\epsilon^2} + 2\epsilon(f-E(\hat{f}))+ \text{Var}(\hat f)+{\color{magenta}\text{Var}(\epsilon)}\\
&= {\color{orange}(f-E(\hat f))^2} + \epsilon^2+2\epsilon(f-E(\hat{f}))+ \text{Var}(\hat f)+\text{Var}(\epsilon)\\
&= {\color{magenta}(f-E(\hat f))^2 + \epsilon^2+2\epsilon(f-E(\hat{f}))}+ \text{Var}(\hat f)+\text{Var}(\epsilon)\\
&= {\color{magenta}(f+\epsilon-E(\hat f))^2} + \text{Var}(\hat f)+\text{Var}(\epsilon)\\
&= [\text{Bias}(\hat f(x_0))]^2 + \text{Var}(\hat f)
\end{aligned}
$$

 Note that we omit the term $$\text{Var}(\epsilon)$$ at the last step because $$\epsilon$$ is fixed by assumption and thus its variance is zero.

In general, the more flexible a method is, the less Bias and the more Variance it has. We want to choose a moderate level of flexibility such that the method has small bias and small variance, which would result in the least expected test MSE. The opposite growth of Bias and Variance is called the **Bias-Variance Tradeoff**.

| Flexibility                                      | 0    |            | &nbsp;$$p$$            |            | &nbsp;$$\infty$$ |
| ------------------------------------------------ | ---- | ---------- | -------------- | ---------- | -------- |
| Expected Test MSE<br />&nbsp;$$E[(y_0-\hat{f}(x_0))^2]$$ |      | &nbsp;$$\searrow$$ | &nbsp;$$\text{min }E$$ | &nbsp;$$\nearrow$$ | &nbsp;$$\infty$$ |
| Bias<br />&nbsp;$$[\text{Bias}(\hat f(x_0))]^2$$         |      | &nbsp;$$\searrow$$ |                | &nbsp;$$\searrow$$ | 0        |
| Variance<br />&nbsp;$$\text{Var}(\hat f)$$               |      | &nbsp;$$\nearrow$$ |                | &nbsp;$$\nearrow$$ | &nbsp;$$\infty$$ |

### For classification models

In a classification setting, the response and predictions are qualitative data, thus we need a different approach from what we did in a regression setting. We can compute the **error rate**, i.e. the proportion of wrong predictions when compared to the response.

$$
\text{Error rate }=\frac{1}{n}\sum_{i=1}^n I(y_i\ne \hat y_i)
$$

We also distinguish **training error rate** and **testing error rate**, which are respectively computed against training data set and testing data set. A good **classifier** (classification model) is the one that has the smallest testing error rate.

#### Bayes classifier

(Not to be confused with *Naïve Bayes Classifier*)

This is a very simple and effective classifier. It has a conditional probability function $$\text{Pr}(Y=j\ \vert X=x_0)$$, i.e. the probability the class being $$j$$ given the predictor $$X=x_0$$. Basically we will assign each observation with predictor $$X=x_0$$ to class $$j$$ such that $$\text{Pr}(Y=j\ \vert X=x_0)$$ is the largest:

$$
\hat y_0=\text{argmax}_j\ \text{Pr}(Y=j\ \vert X=x_0)
$$

We also define **Bayes error rate** which differs from the standard error rate in the sense that the **indicator variable** $$I(y_i\neq \hat y_i)$$ is either 1 or 0, while with the Bayes error rate we replace the term with the probability that the prediction $$\hat y_i$$ is wrong.

$$
\text{Bayes error rate} = 1 - E(\text{max}_j\ \text{Pr}(Y=j\ \vert X))
$$

However, as you probably realized, this model is just too good to be real. Indeed, in real life application, we do not know the probability distribution of the classes given the predictors, thus applying the Bayes classifier is <u>impossible</u>. Many methods have nevertheless attempted to approximate this probability function of $$Y$$ given $$X$$.

#### K-Nearest Neighbor (KNN)

KNN is one of the methods that use the idea of Bayes classifier by approximating the conditional probability of $$Y$$ given $$X$$. For an observation $$x_0$$, it looks for $$k$$-nearest observations, gathering the classes of these neighbors, and assign the most popular class in the neighborhood of $$x_0$$. The larger $$k$$ is, the less flexible is the method. When $$k=1$$, the method became so flexible that it overfits the data: while the training error rate is 0, the test error is very likely to be high.













