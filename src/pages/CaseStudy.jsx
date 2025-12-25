import Breadcrumbs from "../components/Breadcrumbs";


function CaseStudy() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Breadcrumbs title="AI-Based Brain Tumor Classification" />
            <div className="mt-6 h-px w-full bg-gray-100" />
            {/* Title */}
            <section>
                <h1 className="text-4xl font-semibold text-gray-900">
                    AI-Based Brain Tumor Classification
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Designing a lightweight deep learning system for automated brain tumor
                    classification from MRI images.
                </p>
            </section>

            {/* Overview */}
            <section className="mt-14">
                <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    This project explores the use of deep learning for automated brain tumor
                    classification using MRI scans. The goal was to design an accurate,
                    efficient, and clinically relevant model that can assist medical
                    professionals during diagnosis.
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    A key focus of this work was balancing classification performance with
                    computational efficiency, making the system suitable for real-world
                    medical environments.
                </p>
            </section>

            {/* Problem */}
            <section className="mt-14">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Problem Statement
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    Brain tumor diagnosis from MRI images is a complex and time-sensitive
                    process that requires expert interpretation. Manual analysis can be
                    affected by fatigue, variability in experience, and image quality.
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    While deep learning methods have shown promise, many existing models are
                    computationally heavy, making them difficult to deploy in resource-
                    constrained clinical settings.
                </p>
            </section>

            {/* Approach */}
            <section className="mt-14">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Proposed Approach
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    To address these challenges, I designed a custom attention-based neural
                    architecture that focuses on learning discriminative features from MRI
                    scans while keeping the model lightweight.
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    The model emphasizes selective feature enhancement, allowing it to focus
                    on diagnostically relevant regions without relying on large convolutional
                    backbones.
                </p>
            </section>

            {/* Architecture */}
            <section className="mt-16">
                <h2 className="text-2xl font-semibold text-gray-900">
                    System Design (High-Level)
                </h2>

                <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">

                    <img
                        src="/images/architecture.png"
                        alt="High-level architecture overview"
                        className="mx-auto rounded-lg"
                    />

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Progressive feature extraction and aggregation across multiple spatial scales.
                    </p>

                    <div className="my-6 h-px bg-gray-100" />

                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Attention-based feature extraction from MRI images</li>
                        <li>• Progressive spatial compression for computational efficiency</li>
                        <li>• End-to-end trainable classification pipeline</li>
                        <li>• Architecture optimized for low parameter count</li>
                    </ul>

                    <p className="mt-6 text-xs text-gray-400">
                        Detailed architectural specifications are intentionally omitted due to the
                        ongoing peer-review process.
                    </p>
                </div>
            </section>

            {/* Training */}
            <section className="mt-14">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Data & Training
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    The system was trained on a curated MRI dataset containing multiple brain
                    tumor categories. Images were preprocessed and standardized to ensure
                    consistent training behavior.
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    Modern optimization techniques and regularization strategies were applied
                    to improve generalization and reduce overfitting.
                </p>
            </section>

            {/* Results */}
            <section className="mt-16">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Results & Evaluation
                </h2>

                <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
                    The proposed model was evaluated across multiple brain tumor categories to
                    assess classification performance, efficiency, and clinical suitability.
                    Emphasis was placed on achieving reliable predictions while maintaining a
                    lightweight architectural footprint.
                </p>

                {/* Result Cards */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Performance */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Classification Performance
                        </h3>
                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                            The model demonstrated strong discriminatory capability across tumor
                            classes, producing consistent predictions despite variations in MRI
                            quality and spatial resolution.
                        </p>
                    </div>

                    {/* Efficiency */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Computational Efficiency
                        </h3>
                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                            By avoiding large convolutional backbones, the architecture maintains a
                            low parameter count, enabling faster inference and reduced memory usage.
                        </p>
                    </div>

                    {/* Practical Impact */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Practical Relevance
                        </h3>
                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                            The balance between accuracy and efficiency makes the system more
                            suitable for deployment in real-world clinical environments with limited
                            computational resources.
                        </p>
                    </div>

                </div>

                {/* Disclaimer */}
                <p className="mt-6 text-xs text-gray-500 max-w-2xl">
                    Quantitative metrics and detailed evaluation protocols are intentionally
                    omitted due to the ongoing peer-review process.
                </p>
            </section>


            {/* Learnings */}
            <section className="mt-14">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Key Learnings
                </h2>

                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                    <li>Attention mechanisms can improve efficiency and interpretability</li>
                    <li>Lightweight models are essential for real-world medical deployment</li>
                    <li>Balancing theory with clinical constraints is critical</li>
                    <li>Medical AI must be evaluated beyond raw accuracy metrics</li>
                </ul>
            </section>

            {/* Footer Note */}
            <section className="mt-16 border-t pt-6 text-sm text-gray-500">
                <p>
                    This case study summarizes an ongoing research project. Certain technical
                    details are intentionally limited until the peer-review process is
                    complete.
                </p>
            </section>

        </main>
    );
}

export default CaseStudy;
