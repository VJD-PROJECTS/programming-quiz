class QuestionsListBuilder {
    constructor(questionList) {
        this.questionList = questionList;
    }

    getInstance() {
        return this.questionList.map(question => {
            return {
                Id: question._id,
                TopicId: question.TopicId,
                Title: question.Title,
                Answer: question.Answer,
                Description: question.Description,
                Options: {
                    A: question.Options.A,
                    B: question.Options.B,
                    C: question.Options.C,
                    D: question.Options.D,
                },
                Score: question.Score,
                SelectedAnswers: question.SelectedAnswers,
                CreatedDate: question.CreatedDate,
                IsActive: question.IsActive,
            }
        });
    }
}

class QuestionBuilder {
    constructor(question) {
        this.question = question;
    }

    getInstance(isNew = true) {
        return {
            Id: isNew ? '' : this.question._id,
            TopicId: this.question.TopicId,
            Title: this.question.Title,
            Answer: this.question.Answer,
            Description: this.question.Description,
            Options: {
                A: this.question.Options.A,
                B: this.question.Options.B,
                C: this.question.Options.C,
                D: this.question.Options.D,
            },
            Score: this.question.Score,
            SelectedAnswers: '',
            CreatedDate: isNew ? new Date() : this.question.CreatedDate,
            IsActive: this.question.IsActive,
        };
    }
}

module.exports = {
    QuestionsListBuilder,
    QuestionBuilder
};